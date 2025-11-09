# Trust vs Risk Research - Complete Project Context for Website Development

**Purpose:** This document provides comprehensive context for creating an interactive research website
**Audience:** Claude AI assistant for web development
**Date:** November 8, 2025
**Status:** Parameter recovery validation completed, ready for pilot study

---

## 🎯 WEBSITE OBJECTIVES

### Primary Goals
1. **Scientific Vulgarization** - Make the research accessible to general public (family, friends, non-experts)
2. **Academic Portfolio** - Showcase research rigor for PhD applications and scientific community
3. **Dual Audience** - Balance accessibility with academic credibility

### Key Requirements
- **Tone:** Accessible but rigorous, engaging but scientifically accurate
- **Format:** Story-driven interactive website (NOT a static academic page)
- **Timeline:** URGENT - needed within 1 week for PhD applications
- **Teaching:** User is learning web development - explain all steps clearly
- **Code Quality:** Robust, maintainable, evolutive (project will continue)
- **Privacy:** Real names OK, no code sharing (research in progress)

### Must-Have Elements
1. **Interactive Trust Game simulator** - Let visitors play the actual experiment
2. **Prospect Theory visualizations** - Interactive parameter exploration with sliders
3. **Parameter Recovery results** - Our validation findings (today's work!)
4. **Project timeline** - Visual representation of research stages
5. **Behind-the-scenes** - Learning journey, challenges overcome
6. **Scientific rigor** - Show methodology without being dry

---

## 📖 THE RESEARCH STORY

### The Big Question
**"Why do people trust differently than they take risks?"**

Traditional economics treats trust and risk as identical - both involve uncertainty. But behaviorally, they're different:
- **Risk:** Outcomes depend on chance (dice, lottery)
- **Trust:** Outcomes depend on another person's choice

**Key Innovation:** This research applies **Prospect Theory** (designed for risk) to trust decisions to understand:
1. Do people evaluate trust the same way as risk?
2. What makes trust special? (hint: betrayal aversion)
3. Can we predict trust behavior from risk preferences?

### Why This Matters
- **Practical:** Understanding trust is crucial for cooperation, economics, relationships
- **Scientific:** Nobody has systematically applied Prospect Theory to trust before
- **Methodological:** Innovative experimental design (Inverted Trust Game) controls for confounds

---

## 🎮 THE EXPERIMENTS EXPLAINED

### Trust Game (Classic)
```
You have 10€.
You can invest some (or all) with Partner B.
  → Invested amount TRIPLES
  → Partner B decides how much to return to you

Example:
- You invest 6€ (keep 4€)
- Partner receives 18€ (6€ × 3)
- Partner returns... 9€? 0€? 12€?
- You end with: 4€ + returned amount
```

**The uncertainty:** Will Partner B be generous or selfish?

### Risk Game (Control)
```
Same setup, but:
  → Invested amount TRIPLES
  → COMPUTER randomly returns money based on probability

Example:
- You invest 6€ (keep 4€)
- 60% chance: receive 12€
- 40% chance: receive 0€
```

**The uncertainty:** Pure chance, no human decision

### Inverted Trust Game (Our Innovation!)
```
Why this is needed:
- In classic Trust Game: Partner knows how much you sent
- Problem: They might return based on guilt/fairness, not preference
- Solution: INVERT the game

Inverted version:
- You invest 6€ → Partner receives RANDOM amount (unknown to them)
- Partner decides how much to return
- Their decision reflects pure preference, not reaction to your choice
```

**Innovation:** Isolates trust from guilt/reciprocity confounds

---

## 🧠 PROSPECT THEORY FRAMEWORK

### What is Prospect Theory?
Nobel Prize-winning model (Kahneman & Tversky) explaining how people make risky decisions.

**Key Insight:** People don't think about money linearly - they're:
1. **Risk-averse for gains** (prefer sure $50 over 50% chance of $100)
2. **Risk-seeking for losses** (prefer 50% chance of losing $100 over sure loss of $50)
3. **Loss-averse** (losing $50 hurts more than gaining $50 feels good)

### The 4 Parameters We Estimate

#### 1. **β (beta) - Outcome Sensitivity**
```
Range: 0.5 to 1.0
Higher β = more sensitive to magnitude differences
Lower β = more risk-tolerant

Example:
β = 1.0: $100 feels twice as good as $50
β = 0.5: $100 feels only 1.4× as good as $50
```

#### 2. **γ+ (gamma gain) - Gain Probability Weighting**
```
Range: 0.5 to 2.5
γ+ = 1.0: Perceive probabilities accurately
γ+ < 1.0: Overweight small probabilities (optimistic)
γ+ > 1.0: Underweight small probabilities (pessimistic)

Example:
10% chance feels like:
- γ+ = 0.7: ~20% (overweight)
- γ+ = 1.5: ~5% (underweight)
```

#### 3. **γ- (gamma loss) - Loss Probability Weighting**
```
Same as γ+, but for losses
People often distort gain and loss probabilities differently
```

#### 4. **λ (lambda) - Loss Aversion**
```
Range: 1.0 to 5.0
λ = 1.0: Losses and gains weigh equally
λ = 2.0: Losses hurt 2× more than gains feel good
λ = 3.0: Losses hurt 3× more

Most people: λ ≈ 2.0 to 2.5
```

### The Mathematical Model (Simplified)
```
Decision to invest depends on "Certainty Equivalent" (CE):

CE = [Value of Gain × Weight of Gain Prob] + [Value of Loss × Weight of Loss Prob]

Value Function:
  v(gain) = gain^β
  v(loss) = -λ × |loss|^β

Probability Weighting:
  w(p) = p^γ / (p^γ + (1-p)^γ)^(1/γ)

Decision Rule:
  Invest if CE > 0
  Keep money if CE < 0
```

---

## 🔬 EXPERIMENTAL DESIGN

### The Challenge
**How do we estimate 4 parameters per person efficiently?**

Traditional approach: Test hundreds of trials per person (exhausting, time-consuming)

Our approach: **Optimal trial selection using Fisher Information Matrix**

### Fisher Information Optimization (Simplified Explanation)

**The Idea:**
Not all trials are equally informative. Some trials help distinguish between different parameter values better than others.

**The Process:**
1. **Generate candidates:** Create 17,955 possible investment scenarios
2. **Simulate extensively:** Calculate expected behavior for 6.25 BILLION parameter combinations
3. **Compute informativeness:** For each trial, calculate how much information it provides about each parameter
4. **Select optimally:** Use D-optimal design to choose 286 trials that maximize total information

**The Result:**
- **98.4% reduction** in trials (17,955 → 286)
- **Minimal precision loss** compared to testing all trials
- **Participants tested in ~30-40 minutes** instead of 5+ hours

### Trial Selection Quality

| Parameter | Theoretical Precision | Quality |
|-----------|---------------------|---------|
| β | SE = 0.015 | Excellent |
| γ+ | SE = 0.030 | Very Good |
| γ- | SE = 0.054 | Good |
| λ | SE = 0.076 | Acceptable |

**But:** These are theoretical predictions → Need empirical validation!

---

## ✅ PARAMETER RECOVERY VALIDATION (Completed Nov 8, 2025)

### Why Validation is Critical
Fisher optimization gives **theoretical** precision. We need to test:
1. Can we actually recover true parameters from simulated data?
2. Do estimation algorithms work reliably?
3. Are there systematic biases?
4. Does the design work under realistic noise?

### What We Did
**Comprehensive simulation study:**
- **500 simulations** total
- **50 diverse parameter combinations** (Latin Hypercube Sampling across full parameter space)
- **2 noise levels** (σ = 0.25, 0.50) simulating different decision consistency
- **5 replications** per combination
- **Computational power:** 500 parallel jobs on DCCN cluster, ~5-10 minutes total runtime

### The Results

#### Final Recovery Quality

| Parameter | Mean Absolute Error | Median Error | Assessment |
|-----------|-------------------|--------------|------------|
| **β** | 0.186 | 0.168 | ✅ **Good** - Reliable recovery |
| **γ+** | 0.607 | 0.434 | ⚠️ **Moderate** - Usable for comparisons |
| **γ-** | 0.433 | 0.340 | ⚠️ **Moderate** - Acceptable |
| **λ** | 1.160 | 0.811 | ⚠️ **Moderate** - 29% of range, proportionally OK |

#### Key Findings
- ✅ **99.6% convergence rate** (499/502 simulations successful)
- ✅ **No systematic bias** (mean signed errors ≈ 0)
- ⚠️ **Identifiability limitations** for γ parameters (multiple parameter combinations produce similar behavior)
- ✅ **NOT an optimization problem** (tested n_starts = 3 vs 20 → identical results → fundamental information limit)

### What This Means for the Study

**✅ THE DESIGN IS APPROPRIATE because:**

1. **Within-subject comparisons are robust**
   - Primary analysis: Trust vs Risk *within* each person
   - Estimation errors cancel out when taking differences
   - Research questions focus on parameter CHANGES, not absolute values

2. **Model comparison is unaffected**
   - Testing 32 nested models using AIC/BIC
   - Relative model fit preserved even with estimation error
   - Model selection doesn't require perfect parameter recovery

3. **Extreme parameters are rare**
   - Worst recovery at parameter extremes
   - Real participants likely in central 80-90% of range
   - Extreme values (< 5% of population) less critical

4. **λ/τ redundancy can be addressed**
   - Loss aversion (λ) and betrayal aversion (τ) are multiplicatively related
   - Can simplify to λ_trust vs λ_risk instead of separate τ parameter

**❌ LIMITATIONS (acknowledged):**
- Cannot reliably estimate absolute individual parameter values
- High variability in γ+ and γ- estimates
- Small between-group differences may not be detectable

**✅ STRENGTHS (what we CAN do reliably):**
- Within-subject parameter differences (Trust - Risk)
- Model comparison and selection among 32 models
- Qualitative parameter patterns (risk-seeking vs risk-averse)
- Group-level parameter averages

### The Investigation Journey (Shows Scientific Rigor)

**Initial panic:** "Errors are huge! Is the study doomed?"

**Hypothesis 1:** Maybe optimization is stuck in local minima?
- **Test:** Compare n_starts = 3 vs n_starts = 20
- **Result:** IDENTICAL estimates to 3 decimals
- **Conclusion:** NOT an optimization problem

**Hypothesis 2:** Maybe we need more trials?
- **Reality check:** Already using 286 trials, planning 150 for pilot, 70 for fMRI
- **Cannot increase further** due to participant fatigue and scanner time constraints

**Final understanding:** It's an identifiability issue, not a methodological failure
- The 286 trials provide limited information to separate all 4 parameters perfectly
- BUT: This is OK given our research questions focus on comparisons, not absolute values
- Documented limitations + robust within-subject design = scientifically sound

**Outcome:** Proceed with confidence, with clear documentation of capabilities and limitations

---

## 🗺️ THE 32 NESTED MODELS

### Why 32 Models?
We don't assume trust = risk. We test it empirically by comparing models with different assumptions.

### Model Structure (Simplified)

**Factor 1: Parameter Equality**
- Same parameters for Trust and Risk? OR
- Different parameters for Trust and Risk?

**Factor 2: Loss Aversion**
- Standard λ (loss aversion)? OR
- Trust-specific τ (betrayal aversion)?

**Factor 3: Probability Weighting**
- Same γ for gains and losses? OR
- Different γ+ and γ-?

**Combinations:** 2 × 2 × various parameter constraints = 32 nested models

### Example Models

**Model 1 (Simplest):**
- Same β, γ, λ for Trust and Risk
- One γ for both gains and losses
- **Prediction:** Trust = Risk (no difference)

**Model 32 (Most Complex):**
- Different β_trust, β_risk
- Different γ+_trust, γ-_trust, γ+_risk, γ-_risk
- Different λ_trust, λ_risk + betrayal aversion τ
- **Prediction:** Trust and Risk are fundamentally different

### Model Comparison Strategy
Use AIC/BIC to balance fit vs complexity → Select model that best describes data

**Key Insight:** We're not assuming an answer - we're letting the data tell us which model is best!

---

## 📅 PROJECT TIMELINE & STATUS

### ✅ Completed (as of Nov 8, 2025)

**1. Experimental Design (Sep-Oct 2024)**
- Literature review and theoretical framework
- Design of Inverted Trust Game
- 32 nested models specification

**2. Optimal Trial Selection (Oct-Nov 2024)**
- Generated 17,955 candidate trials
- MATLAB modeling: 6.25 billion parameter × trial combinations (36 hours, 250 parallel jobs)
- Fisher Information optimization (72 hours computation)
- Selected 286 optimal trials (Nov 7, 2025)

**3. Parameter Recovery Validation (Nov 8, 2025)**
- Developed R pipeline for simulation and estimation
- Diagnostic tests (10 parameter combinations)
- Optimization investigation (n_starts comparison)
- Full validation: 500 simulations (50 params × 2 noise × 5 reps)
- Complete analysis and documentation
- **Status:** Design validated, ready to proceed!

### 🔄 In Progress

**4. Pilot Study (Planning)**
- 150 trials (reduced from 286 for feasibility)
- ~20-30 participants
- Test experimental procedures
- Preliminary parameter estimates
- Expected: December 2025 - January 2026

### ⏳ Upcoming

**5. Behavioral Study (Main)**
- Full 286 trials
- Larger sample size
- Both Trust and Risk conditions
- Model comparison
- Expected: February - April 2026

**6. fMRI Study**
- 70 trials (scanner time constraints)
- Neural correlates of trust vs risk
- Parameter-brain activity relationships
- Expected: June - September 2026

**7. Publication**
- Write manuscript
- Submit to journal
- Expected submission: Late 2026

---

## 👤 RESEARCHER INFORMATION

### Academic Background
- **Current:** Master's student in Cognitive Neuroscience
- **Institution:** Radboud University, Donders Institute (Nijmegen, Netherlands)
- **Focus:** Decision neuroscience, social cognition, computational modeling

### Research Interests
- Trust and cooperation
- Decision-making under uncertainty
- Computational modeling of behavior
- Individual differences in risk and social preferences

### This Project's Significance
- **First major research project** - Learning computational modeling, experimental design, statistical validation
- **Novel contribution** - First systematic application of Prospect Theory to trust
- **Methodological innovation** - Inverted Trust Game design
- **Portfolio piece** - Demonstrating rigor for PhD applications

### Learning Journey (Authentic Story for Website)
- Started with limited coding experience
- Learned R, MATLAB, cluster computing, statistical modeling
- Overcame challenges:
  - Understanding Fisher Information optimization
  - Debugging parameter recovery issues
  - Learning when "good enough" is scientifically acceptable
- Emphasis on rigor: "I want to do things well, even if it takes longer"

---

## 📊 KEY DATA & VISUALIZATIONS AVAILABLE

### From Trial Selection
- Trial characteristics distributions
- Fisher Information Matrix heatmap
- Parameter precision estimates
- Coverage of parameter space

### From Parameter Recovery
- **Scatterplots:** True vs Estimated parameters (correlation plots)
- **Histograms:** Error distributions for each parameter
- **Boxplots:** Recovery quality by noise level
- **Barplot:** Mean absolute errors summary
- Available as PDF figures in `parameter_recovery/figures/`

### Interactive Elements to Create
1. **Trust Game Simulator**
   - User plays as Investor
   - Adjust investment amount
   - See outcome based on partner return rate
   - Calculate expected value vs certainty equivalent

2. **Prospect Theory Explorer**
   - Sliders for β, γ+, γ-, λ
   - Live visualization of value function
   - Live visualization of probability weighting function
   - Show how parameters affect investment decisions

3. **Parameter Recovery Visualization**
   - Interactive scatterplot (zoom, filter by noise level)
   - Toggle between parameters
   - Show individual simulations vs aggregate stats

4. **Model Comparison Tree**
   - Visual representation of 32 nested models
   - Click to see model specifications
   - Highlight which models predict what

---

## 🎨 WEBSITE DESIGN SPECIFICATIONS

### Preferred Approach: **Story-Driven Interactive Site**

Inspired by modern science communication (e.g., Nicky Case, Explorable Explanations):
- **Narrative flow:** Take visitor on a journey from question to findings
- **Interactivity:** Learn by doing, not just reading
- **Visual:** Minimize text, maximize graphics/animations
- **Accessible:** Explain technical concepts without jargon
- **Credible:** Link to methods, code (later), publications when ready

### Proposed Structure (Refined from Brainstorming)

**1. Landing Page - The Hook**
```
Eye-catching question: "Would you trust a stranger with €10?"
Interactive element: Simple choice (Yes/No/It depends)
  → Based on choice, show personalized intro
Scroll to reveal: "But what if it was a dice roll instead?"
```

**2. The Question**
```
Narrative: Why trust ≠ risk (even though economics says they're the same)
Visual comparison: Trust Game vs Risk Game side-by-side
Interactive: Play both games, feel the difference
```

**3. The Science - Prospect Theory**
```
Gentle intro: "How do people actually make decisions?"
Interactive parameter explorer:
  - Sliders for β, γ, λ
  - Live graphs showing value and weighting functions
  - Example scenarios updating in real-time
```

**4. The Challenge - Experimental Design**
```
Problem: How to estimate 4 parameters efficiently?
Visual: "Naive approach = 500 trials = 3 hours = exhausted participants"
Solution: Fisher Information optimization
Visual: Show how we went from 17,955 → 286 trials
Interactive: Click through trial selection process
```

**5. The Validation - Parameter Recovery**
```
Story: "Theory says it should work. But does it?"
Visual timeline: Our investigation journey
  - Initial concerns
  - Testing optimization hypothesis
  - Final validation results
Interactive: Explore recovery quality
  - Scatterplots (true vs estimated)
  - Filter by parameter, noise level
  - See individual simulations
```

**6. The Innovation - Inverted Trust Game**
```
Problem: Classic Trust Game confounds
Solution: Inverted design
Interactive: Play both versions, see the difference
```

**7. Where We Are - Timeline**
```
Visual timeline:
  ✅ Design completed
  ✅ Validation completed
  🔄 Pilot study (next)
  ⏳ Main study
  ⏳ fMRI
  ⏳ Publication
```

**8. Behind the Scenes - Learning Journey**
```
Personal story: Learning to code, overcome challenges, do rigorous research
Lessons learned
Acknowledgments
```

**9. For Researchers - Technical Details**
```
Collapsible sections with:
  - Full methodology
  - Statistical details
  - Link to GitHub (when ready)
  - Preprint (when ready)
```

**10. Contact & Links**
```
Email, LinkedIn, ResearchGate, etc.
```

### Design Aesthetic

**Colors:**
- Primary: Professional blues/teals (trust, science)
- Accent: Warm orange/coral (engagement, warmth)
- Background: Clean white/light gray
- Code blocks: Subtle syntax highlighting

**Typography:**
- Headers: Modern sans-serif (e.g., Inter, Poppins)
- Body: Readable serif or clean sans (e.g., Lora, Source Sans Pro)
- Code: Monospace (e.g., Fira Code)

**Interactions:**
- Smooth scroll animations (not overwhelming)
- Hover effects for interactivity cues
- Responsive (mobile-first design)
- Fast loading (optimize images)

### Technical Specifications

**Framework:** Astro (recommended for:)
- Fast performance (static site generation)
- Easy to learn
- Markdown support for content
- Component-based (reusable)
- Great for mixing static content with interactive elements

**Styling:** Tailwind CSS
- Modern utility-first approach
- Responsive by default
- Easy to customize
- No complex CSS needed

**Interactivity:**
- Vanilla JavaScript for custom interactions
- Plotly.js for data visualizations
- Simple animations with CSS/GSAP

**Hosting:** GitHub Pages
- Free
- Easy deployment
- Custom domain support
- Good for static sites

**Content Management:**
- Markdown files for text content
- JSON for structured data (parameter values, etc.)
- Easy to update without touching code

---

## 📦 FILES & RESOURCES ON CLUSTER

### Key Data Files

**Trial Selection:**
```
/project/3014021.10/Modeling/parallel_jobs/PT_selection/scripts/fisher_optimized/
├── balanced_trials_300_final.rds          # 286 selected trials
├── balanced_trials_300_final_log.csv      # Trial statistics
└── trial_selection_report.md              # Technical report
```

**Parameter Recovery:**
```
/project/3014021.10/Modeling/parameter_recovery/
├── data/
│   ├── compiled_results.csv               # All 500 simulations
│   ├── summary_statistics.csv             # Aggregate stats
│   └── parameter_grid.csv                 # 50 test combinations
├── figures/
│   ├── fig1_recovery_scatterplots.pdf
│   ├── fig2_error_distributions.pdf
│   ├── fig3_errors_by_noise.pdf
│   └── fig4_summary_barplot.pdf
└── FINAL_SUMMARY.md                       # Complete validation report
```

### Documentation
```
/project/3014021.10/Modeling/
├── QUICK_GUIDE.md                         # Project overview
├── PARAMETER_RECOVERY_PLAN.md             # Validation plan
└── PARAMETER_RECOVERY_OPTIONS.md          # Decision rationale
```

### Scripts (for reference, NOT for website)
```
parameter_recovery/scripts/
├── 01_prospect_theory_functions.R         # PT calculations
├── 02_simulate_data.R                     # Data generation
├── 03_estimate_parameters_simple.R        # Estimation
├── run_single_recovery.R                  # Master script
├── 04_compile_results.R                   # Analysis
└── 05_visualize_results.R                 # Plotting
```

---

## 🎯 INSTRUCTIONS FOR WEB DEVELOPMENT CLAUDE

### Your Task
Create an interactive, story-driven research website that:
1. Makes complex research accessible to general public
2. Demonstrates academic rigor for PhD applications
3. Teaches web development concepts to the user
4. Follows best practices (clean code, responsive, performant)

### Your Approach
1. **Teach as you code:**
   - Explain every significant decision
   - Break down complex concepts
   - Provide learning resources
   - Encourage questions

2. **Build iteratively:**
   - Start with landing page (validate design direction)
   - Add sections incrementally
   - Get feedback at each stage
   - Refine based on user input

3. **Prioritize:**
   - Core content first (sections 1-7)
   - Interactivity second (simulators, explorers)
   - Polish last (animations, fine-tuning)

4. **Code quality:**
   - Clean, commented code
   - Reusable components
   - Responsive design from start
   - Accessible (semantic HTML, ARIA when needed)

### Key Constraints
- **Timeline:** 1 week to functional v1.0
- **No backend:** Static site only (no databases, no server-side logic)
- **No code sharing:** Research is ongoing, don't include actual R/MATLAB code
- **Privacy:** Use real name and credentials
- **Learning:** User is beginner in web dev - explain thoroughly

### Suggested First Steps
1. Confirm design direction with user
2. Set up development environment (Astro + Tailwind)
3. Create landing page prototype
4. Get user feedback
5. Build out sections iteratively
6. Add interactivity
7. Polish and deploy

### Resources to Draw From
- This document (complete project context)
- User's Master thesis (detailed scientific background)
- Parameter recovery results (figures and data)
- User's input on preferences and priorities

---

## 💬 TONE & VOICE GUIDELINES

### For General Public Sections
- **Conversational:** "You" language, direct address
- **Curious:** Ask questions, invite exploration
- **Humble:** Acknowledge complexity, don't oversimplify excessively
- **Engaging:** Tell a story, not a textbook
- **Visual:** Show, don't just tell

**Example:**
> "Imagine a stranger offers you a deal: give them €10, they'll triple it, and maybe give you some back. Would you trust them? Now imagine the same deal, but a dice decides how much you get back. Same odds, different feel. That difference? That's what we're studying."

### For Academic Sections
- **Precise:** Use correct terminology
- **Rigorous:** Show methodology clearly
- **Transparent:** Acknowledge limitations
- **Comprehensive:** Link to details for interested readers
- **Professional:** Academic tone without being stuffy

**Example:**
> "We employed D-optimal experimental design using Fisher Information Matrix calculations to select 286 trials from a candidate pool of 17,955, achieving a 98.4% reduction while maintaining acceptable precision across all four Prospect Theory parameters (β, γ+, γ-, λ). Subsequent parameter recovery validation (N=500 simulations) confirmed moderate recovery quality suitable for within-subject comparisons."

### For Behind-the-Scenes
- **Authentic:** Real challenges, real learning
- **Reflective:** What worked, what didn't, what was learned
- **Encouraging:** For other students/beginners
- **Human:** It's OK to struggle, science is iterative

**Example:**
> "When the first parameter recovery test showed huge errors, I panicked. 'Is the whole study doomed?' We investigated systematically - tested if it was an optimization problem (it wasn't), considered if we needed more trials (we couldn't add more). Eventually realized: it's an identifiability issue, and that's actually OK given our research questions. Lesson: Sometimes 'good enough' is scientifically rigorous."

---

## ✅ SUCCESS CRITERIA

### For the Website
- [ ] Loads fast (< 3 seconds on normal connection)
- [ ] Responsive (works on mobile, tablet, desktop)
- [ ] Accessible (keyboard navigation, screen reader compatible)
- [ ] Interactive elements work smoothly
- [ ] Content is accurate and clear
- [ ] Balances accessibility with academic rigor
- [ ] User can explain what the research is about after visiting
- [ ] Impresses PhD admissions committees

### For the Development Process
- [ ] User understands each major component
- [ ] Code is well-organized and documented
- [ ] User can make simple updates independently
- [ ] Development happens in manageable increments
- [ ] User gets feedback opportunities at each stage
- [ ] Timeline met (1 week to v1.0)

### For the Learning Experience
- [ ] User learns HTML/CSS/JavaScript basics
- [ ] User understands static site generation concept
- [ ] User can modify content (text, images)
- [ ] User knows how to deploy updates
- [ ] User feels empowered, not overwhelmed

---

## 📞 NEXT STEPS

1. **User provides Master thesis** → Extract detailed scientific content
2. **Confirm design direction** → Which sections? What priority?
3. **Set up development environment** → Astro project initialization
4. **Build landing page** → Get early feedback on tone/style
5. **Iterate through sections** → Build incrementally with feedback loops
6. **Add interactivity** → Simulators and visualizations
7. **Deploy** → GitHub Pages setup and launch

---

**End of context document. Ready to build an amazing research website! 🚀**
