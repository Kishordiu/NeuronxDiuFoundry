import { test, expect } from '@playwright/test';

test.describe('Security & Functionality Validations', () => {
  test('should return correct security headers', async ({ request }) => {
    const response = await request.get('/');
    expect(response.ok()).toBeTruthy();
    
    const headers = response.headers();
    
    expect(headers['content-security-policy']).toBeDefined();
    expect(headers['content-security-policy']).toContain("frame-ancestors 'none'");
    expect(headers['x-frame-options']).toBe('DENY');
    expect(headers['x-content-type-options']).toBe('nosniff');
    expect(headers['referrer-policy']).toBe('strict-origin-when-cross-origin');
    expect(headers['strict-transport-security']).toBe('max-age=63072000; includeSubDomains; preload');
    expect(headers['permissions-policy']).toBe('camera=(), microphone=(), geolocation=(), bluetooth=(), usb=(), payment=(), midi=()');
  });

  test('should load the page without CSP console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    
    // Check event name in title
    await expect(page).toHaveTitle(/NeuronX26/);
    
    // Check that the favicon D is requested (icon.svg)
    // Favicon is typically linked, we can check the DOM
    const favicon = page.locator('link[rel="icon"]');
    await expect(favicon).toHaveCount(1);
    
    // Wait for a little bit to let CSP errors surface if any
    await page.waitForTimeout(2000);
    
    // We shouldn't see CSP violation errors
    const cspErrors = consoleErrors.filter(err => err.toLowerCase().includes('content security policy'));
    expect(cspErrors.length).toBe(0);
  });
  
  test('404 page should not expose sensitive information', async ({ page }) => {
    const response = await page.goto('/random-non-existent-route-12345');
    expect(response?.status()).toBe(404);
    
    // Page shouldn't contain stack traces
    const content = await page.content();
    expect(content).not.toContain('stack trace');
    expect(content).not.toContain('.tsx');
    expect(content).not.toContain('C:\\');
  });
});
