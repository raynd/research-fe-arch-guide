---
title: Experimental Design
description: Shared protocol requirements for controlled frontend research.
---

## Design principles

- State the objective, research question, and hypothesis before execution.
- Identify independent, dependent, and control variables explicitly.
- Keep source content equivalent across variants except for the factor under test.
- Predefine test queries, ground truth, annotation rules, metrics, and analysis.
- Capture initial HTML, rendered DOM, and pipeline intermediates when relevant.
- Repeat runs where systems or measurements are nondeterministic; report variability.
- Preserve raw outputs and record protocol deviations.

## Design review checklist

- Can the variant change be isolated?
- Are the target system, version/configuration, and observation stage known?
- Are outcome measures valid for the claim being tested?
- Are baseline and negative/null outcomes specified?
- Are sample size, query selection, and human annotation constraints acknowledged?
- Is the design feasible and permitted under tool terms?

Specific experiment protocols remain proposals until reviewed and piloted.
