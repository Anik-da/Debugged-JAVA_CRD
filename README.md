# DebugStore Fixed Project

---

## 🚀 Getting Started

### Run Backend

```bash
cd backend
mvn spring-boot:run
```

Open in your browser:
```text
http://localhost:8080/api/health
```

### Run Tests

```bash
cd backend
mvn test
```

Expected output:
```text
BUILD SUCCESS
```

### Run Frontend

Open:
```text
frontend/index.html
```

---

## 🛠️ Reverse Debugging Wars – Java CRD Debugging Reference

This reference guide is designed for the **Reverse Debugging Wars** competition. It summarizes common bug patterns intentionally introduced into Spring Boot CRUD applications and maps them to their corresponding fixes.

### Key Areas of Focus
* **Validation Logic Failures:** Handling incorrect bounds, invalid input parameters, or negative price/quantity inputs.
* **Controller Mapping Errors:** Addressing binding issues, incorrect endpoint paths, or missing request variables.
* **Repository Query Issues:** Fixing JPA query methods and incorrect entity queries.
* **Missing Spring Annotations:** Restoring required framework indicators like `@RestController`, `@Service`, or dependency injection hooks.
* **Entity Configuration Mistakes:** Correcting primary key declarations, schema definitions, and column rules.
* **HTTP Status Mismatches:** Ensuring correct API error response codes (e.g., `400 Bad Request`, `404 Not Found`).
* **Request Body Binding Problems:** Explicit parameter bindings and deserialization setups.
* **Exception Handling Issues:** Resolving unexpected exceptions or server crashes.

### Infographic Row Details
Each row in the debugging reference includes:
1. **Failing Test or Observed Error:** The specific symptom observed during execution.
2. **Incorrect Code:** The bug-ridden snippet causing the failure.
3. **Corrected Code:** The minimal, clean fix required to resolve the issue.
4. **Root Cause Explanation:** A concise breakdown of why the bug occurred.

The purpose of this guide is to accelerate debugging, helping participants quickly locate issues, understand the errors, and apply precise, minimal fixes without causing regressions.

---

### ⏱️ Recommended Debugging Workflow

1. **Run All Tests:** Execute the test suite to locate failing components.
2. **Isolate the Failure:** Focus on the first failing test in the logs.
3. **Identify the Pattern:** Match the failure signature against the reference table.
4. **Locate & Repair:** Navigate to the affected class and line of code to apply the fix.
5. **Apply Minimal Changes:** Apply the smallest code modification necessary.
6. **Validate:** Re-run the tests and repeat the process until the build succeeds.

This systematic approach prioritizes **accuracy, speed, and clean code modification**—the core metrics evaluated in the competition.