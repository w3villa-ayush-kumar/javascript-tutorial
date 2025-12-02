/**
 * =====================================================================
 *                  IMPORTANT JAVASCRIPT BEST PRACTICES
 *                (Essential Rules to Always Keep in Mind)
 * =====================================================================
 *
 *  CLEAN & READABLE CODE
 * ---------------------------------------------------------------------
 * - Use meaningful, descriptive variable and function names.
 * - Follow consistent naming conventions (camelCase recommended).
 * - Keep functions small and focused (Single Responsibility Principle).
 * - Avoid magic numbers — use constants instead.
 * - Separate business logic from UI logic.
 *
 *  CODE ORGANIZATION
 * ---------------------------------------------------------------------
 * - Group related functions/variables together.
 * - Keep imports organized at the top of the file.
 * - Limit variable scope (avoid global pollution).
 * - Follow separation of concerns and modular design.
 *
 *  STYLE & FORMATTING
 * ---------------------------------------------------------------------
 * - Use consistent indentation (2 or 4 spaces).
 * - Add spaces around operators (a + b).
 * - Keep opening braces `{` on the same line.
 * - Always end statements with semicolons `;`.
 *
 *  ERROR HANDLING
 * ---------------------------------------------------------------------
 * - Use try/catch for error-prone operations.
 * - Provide clear, meaningful error messages.
 * - Handle edge cases carefully.
 * - Avoid catching errors without logic.
 *
 *  DOCUMENTATION
 * ---------------------------------------------------------------------
 * - Use JSDoc for functions, classes, and public APIs.
 * - Keep documentation updated when logic changes.
 * - Prefer self-explanatory code over excessive comments.
 *
 *  TESTING & VALIDATION
 * ---------------------------------------------------------------------
 * - Write unit tests (Jest/Mocha).
 * - Validate and sanitize ALL user inputs (client & server).
 * - Use ESLint/linters for consistent style and early bug detection.
 *
 *  PERFORMANCE OPTIMIZATION
 * ---------------------------------------------------------------------
 * - Avoid unnecessary work inside loops.
 * - Reduce DOM manipulations (use batching, debounce, throttle).
 * - Use efficient data structures & algorithms.
 * - Implement caching (browser, memory, network).
 * - Minify & bundle code for production.
 *
 *  SECURITY (CRITICAL)
 * ---------------------------------------------------------------------
 * - Always sanitize and validate input (prevent XSS/SQL injection).
 * - Use secure authentication & authorization methods.
 * - Avoid storing credentials or API keys in plain text.
 * - Use HTTPS for secure transmission.
 * - Follow least privilege principles.
 *
 *  COLLABORATION & MAINTAINABILITY
 * ---------------------------------------------------------------------
 * - Use Git effectively (frequent commits, descriptive messages).
 * - Avoid code duplication (DRY principle).
 * - Refactor regularly to reduce complexity.
 * - Write clean, self-explanatory, maintainable code.
 *
 *  ASYNCHRONOUS JAVASCRIPT
 * ---------------------------------------------------------------------
 * - Use async/await or Promises correctly.
 * - Never block the event loop with heavy synchronous tasks.
 * - Understand the JavaScript event loop model.
 *
 *  CROSS-BROWSER & RESPONSIVE
 * ---------------------------------------------------------------------
 * - Use feature detection instead of user-agent sniffing.
 * - Test your code in multiple browsers.
 * - Follow accessibility and responsive design principles.
 *
 * =====================================================================
 *                            ALWAYS REMEMBER 
 * ---------------------------------------------------------------------
 * - Clean code > clever code.
 * - Consistency > shortcuts.
 * - Readability > micro-optimizations.
 * - Security is NOT optional.
 * - Performance is a habit, not a feature.
 * - Test your code. Refactor your code. Document your code.
 * =====================================================================
 */
