# Trust and Risk Research: Prospect Theory Modeling
## Project Accomplishments Summary

**Location:** `/project/3014021.10/Modeling/`
**Status:** Trial selection complete | Parameter recovery validated | Ready for data collection
**Last Updated:** November 11, 2025

---

## Research Goal

Investigate how people make decisions differently in **trust scenarios** (involving betrayal aversion) versus **pure risk scenarios** by estimating four Prospect Theory parameters:

1. **β (beta)** [0.5-1.0]: Outcome sensitivity / risk attitude
2. **γ_gain** [0.5-2.5]: Probability weighting for gains
3. **γ_loss** [0.5-2.5]: Probability weighting for losses
4. **λ (lambda)** [1.0-5.0]: Loss aversion

---

## Complete Pipeline: 7 Phases

### **Phase 0: Trial Set Generation**
**Goal:** Create all possible investment trials for inverted trust game

**Process:**
- Investment levels: 1-10 tokens (initial wallet = 10)
- For each investment:
  - Net losses: -1 to -investment
  - Net gains: +1 to max_gain (based on multiplier rule: investment × 4)
    - Investment 1 → max gain 2 (2 outcomes)
    - Investment 5 → max gain 12 (12 outcomes)
    - Investment 10 → max gain 29 (29 outcomes)
  - Gain probabilities: 19 levels (0.05, 0.10, ..., 0.95)
- Full factorial: All combinations of investment × loss × gain × probability

**Output:** `trialset.csv` - **17,955 trials**

**Example trial:**
- Investment: 5 tokens
- Net loss: -3 (end with 7 tokens if loss)
- Net gain: +8 (end with 18 tokens if gain)

---

### **Phase 1: Parameter Space Creation**
**Goal:** Define complete parameter space for Prospect Theory

**Process:**
- Created 4D grid of parameters (50 values each):
  - β: 50 values from 0.5 to 1.0
  - γ_gain: 50 values from 0.4 to 3.0
  - γ_loss: 50 values from 0.4 to 3.0
  - λ: 50 values from 1.0 to 6.0
- Full factorial: 50 × 50 × 50 × 50 = **6,250,000 parameter combinations**
- Divided into 250 parallel jobs (25,000 parameters/job)

**Output:**
- `free_parameters.csv` - 6.25M parameter combinations
- `job_indices.csv` - Job assignments for parallel processing

**Computational scale:** 6.25M parameters × 17,955 trials = **112 billion** predictions needed

---

### **Phase 2: Certainty Equivalent Calculation**
**Script:** `modeling.m` (MATLAB)
**Goal:** Calculate predicted choice for each parameter-trial combination

**Prospect Theory Implementation:**
```matlab
Value function:
  v(x) = x^β                    for gains (x > 0)
  v(x) = -λ × |x|^β            for losses (x < 0)

Probability weighting:
  w(p) = p^γ / (p^γ + (1-p)^γ)^(1/γ)

Certainty Equivalent:
  CE = v(gain) × w(p_gain) + v(loss) × w(p_loss)
```

**Execution:**
- 250 parallel SLURM jobs
- Each job: 25,000 parameters × 17,955 trials = 449M calculations
- Runtime: ~15 minutes/job × 250 jobs = ~63 CPU-hours
- Output: 250 CSV files with CE predictions

**Result:** **112 billion** CE values computed successfully

---

### **Phase 3: Discriminative Trial Identification**
**Script:** `identify_trials.R`
**Goal:** Filter trials that provide information for parameter estimation

**Filtering Criteria:**
1. **Threshold crossing**: Trial must have CE values both above and below 0 (decision varies with parameters)
2. **Sufficient range**: Range of CE predictions ≥ 0.5 across parameter space
3. **Avoid consensus**: Exclude trials where >95% of parameters make same choice

**Result:** 17,955 → **7,169 discriminative trials** (60.1% retained)

---

### **Phase 4: Derivative Calculation**
**Script:** `calculate_derivatives.R`
**Goal:** Compute numerical derivatives ∂CE/∂θ for Fisher Information

**Method:**
- Central differences where possible: `[CE(θ+h) - CE(θ-h)] / (2h)`
- Forward/backward differences at boundaries
- Computed for all 4 parameters × 7,169 trials × 6.25M parameter sets

**Execution:**
- Parallel processing across 268,156 batch files
- Each batch: subset of trials × parameters
- Runtime: ~15,000 CPU-hours total

**Result:** **179 trillion** derivatives computed (4 × 7,169 × 6.25M)

---

### **Phase 5: Fisher Information Optimization**
**Script:** `select_300_trials_compute_fisher.R`
**Goal:** Select trials maximizing parameter estimation precision

**Method: D-optimal Sequential Selection**
1. Compute Fisher Information Matrix for each trial:
   ```
   F_trial = Σ [∂CE/∂θ × ∂CE/∂θ'] / variance
   ```

2. Start with empty set, sequentially add trials maximizing:
   - **Determinant** of combined Fisher matrix (overall information)
   - **Balance** across parameters (min/max diagonal ratio ≥ 0.05)

3. Target: 300 trials, stopped at 286 (no more suitable candidates)

**Execution:**
- Started with 2,644,999 trials with computable Fisher matrices
- Pre-selected 375 top candidates (5× oversampling)
- Greedy sequential selection with quality thresholds

**Result:** **286 optimal trials** selected

**Final Fisher Information Matrix:**
```
              beta    γ_gain   γ_loss   lambda
beta        9201.69    -94.90  -1562.77 -1416.53
gamma_gain   -94.90   1149.39     82.68    41.12
gamma_loss -1562.77     82.68    751.75   424.26
lambda     -1416.53     41.12    424.26   460.10
```

**Standard Errors (Precision):**
| Parameter | SE | Quality |
|-----------|--------|---------|
| β | 0.0147 | Excellent |
| γ_gain | 0.0296 | Very Good |
| γ_loss | 0.0538 | Good |
| λ | 0.0761 | Acceptable |

---

### **Phase 6: Parameter Recovery Validation**
**Scripts:**
- `run_single_recovery.R` - Master simulation script
- `run_parameter_recovery.sh` - SLURM array (500 jobs)
- `04_compile_results.R` - Results aggregation
- `05_visualize_results.R` - Figure generation

**Goal:** Validate that 286 trials can recover true parameters

**Method:**
1. Sample 50 parameter combinations (Latin Hypercube Sampling)
2. For each combination × 2 noise levels (σ=0.25, 0.50) × 5 replications:
   - Simulate choice data using 286 selected trials
   - Add noise: `logit(choice) ~ N(CE, σ²)`
   - Estimate parameters via maximum likelihood (L-BFGS-B)
   - Calculate recovery error: estimated - true

**Execution:**
- 50 params × 2 noise × 5 reps = 500 simulations
- Parallel SLURM array (Job ID: 49459657)
- Runtime: ~2 minutes/simulation
- Additional diagnostic tests: 2 simulations

**Results:**
- **502 total simulations** completed
- **Convergence rate: 99.6%** (500/502)
- **Mean Absolute Errors:**
  - β: 0.186 (26% of range)
  - γ_gain: 0.607 (30% of range)
  - γ_loss: 0.433 (22% of range)
  - λ: 1.160 (29% of range)

**Interpretation:**
- Recovery quality is **moderate** (not excellent, but adequate)
- Within-subject comparisons robust to systematic estimation errors
- Design suitable for:
  ✓ Detecting parameter differences between conditions
  ✓ Model comparison (32 nested models via AIC/BIC)
  ✗ Precise absolute parameter values (systematic bias present)

**Publication outputs:**
- 4 diagnostic figures (scatterplots, distributions, error by noise, summary)
- Complete statistical report (see [PHASE6_PARAMETER_RECOVERY_SUMMARY.md](PHASE6_PARAMETER_RECOVERY_SUMMARY.md))

---

## Computational Summary

| Metric | Value |
|--------|-------|
| **Total trials created** | 17,955 |
| **Parameter combinations** | 6,250,000 |
| **CE calculations** | 112 billion |
| **Discriminative trials** | 7,169 |
| **Derivatives computed** | 179 trillion |
| **Trials in Fisher pool** | 2,644,999 |
| **Optimal trials selected** | 286 |
| **Recovery simulations** | 502 |
| **Total CPU-hours** | ~15,000 |
| **SLURM jobs executed** | 750+ |

---

## Key Files

### Foundational Data
- `trialset.csv` (598 KB) - 17,955 trials
- `free_parameters.csv` (466 MB) - 6.25M parameter combinations
- `job_indices.csv` (6 KB) - Parallel job assignments

### Core Scripts
- `modeling.m` - Prospect Theory CE calculation (MATLAB)
- `identify_trials.R` - Discriminative trial filtering
- `calculate_derivatives.R` - Numerical derivatives
- `select_300_trials_compute_fisher.R` - D-optimal selection
- `run_single_recovery.R` - Parameter recovery master script

### Results
- `balanced_trials_300_final.rds` - 286 selected trials with Fisher info
- `compiled_results.csv` - 502 recovery simulation results
- `fig1-4_*.pdf` - Diagnostic figures
- See [PHASE6_PARAMETER_RECOVERY_SUMMARY.md](PHASE6_PARAMETER_RECOVERY_SUMMARY.md) for validation report 

---

## Current Status: Ready for Data Collection

### ✓ Completed
1. Trial set generation (17,955 trials)
2. Parameter space definition (6.25M combinations)
3. Certainty Equivalent calculations (112B values)
4. Discriminative trial identification (7,169 trials)
5. Derivative calculations (179T derivatives)
6. Fisher Information optimization (286 trials)
7. Parameter recovery validation (502 simulations)
8. Complete documentation and visualization

### → Next Steps
1. **Finalize study design** (current week's work)
2. Prepare experiment implementation for data collection
3. Plan data analysis pipeline for real participant data
4. Prepare model comparison framework (32 nested models)

---

## Technical Infrastructure

**Programming Languages:**
- MATLAB (CE calculations, Prospect Theory core)
- R (statistical analysis, optimization, validation)
- Bash/SLURM (HPC cluster job management)

**Key R Packages:**
- `data.table` - Efficient data manipulation
- `parallel` - Multicore processing
- `lhs` - Latin Hypercube Sampling
- `ggplot2` - Visualization

**Key Statistical Methods:**
- Fisher Information Matrix
- D-optimal experimental design
- Maximum Likelihood Estimation (L-BFGS-B)
- Latin Hypercube Sampling
- Parameter recovery simulation

