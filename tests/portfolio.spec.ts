import { test, expect } from '@playwright/test';

test.describe('Portfolio Core Flow', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should display home page and title', async ({ page }) => {
        await expect(page).toHaveTitle(/Enludus-Tanuki/);
        await expect(page.getByText('Designing Future,')).toBeVisible();
    });

    test('should navigate through main pages', async ({ page }) => {
        // Navigate to Forge (About)
        await page.getByRole('link', { name: 'Forge' }).click();
        await expect(page).toHaveURL(/\/about/);
        await expect(page.getByRole('heading', { name: 'The Forge' })).toBeVisible();

        // Navigate to Menagerie (Projects)
        await page.getByRole('link', { name: 'Menagerie' }).click();
        await expect(page).toHaveURL(/\/projects/);
        await expect(page.getByRole('heading', { name: 'The Menagerie' })).toBeVisible();

        // Navigate to Arcade (Playground)
        await page.getByRole('link', { name: 'Arcade' }).click();
        await expect(page).toHaveURL(/\/playground/);
        await expect(page.getByRole('heading', { name: 'The Arcade' })).toBeVisible();
    });

    test('should toggle theme mode', async ({ page }) => {
        const themeButton = page.getByRole('button', { name: /Switch to (Light|Dark) Mode/ });

        // Check initial state (should be light or dark based on system, but usually light by default in my setup)
        const initialHtmlClass = await page.locator('html').getAttribute('class') || '';

        await themeButton.click();

        const secondHtmlClass = await page.locator('html').getAttribute('class') || '';
        expect(secondHtmlClass).not.toBe(initialHtmlClass);

        await themeButton.click();
        const thirdHtmlClass = await page.locator('html').getAttribute('class') || '';
        expect(thirdHtmlClass).toBe(initialHtmlClass);
    });

    test('should toggle language', async ({ page }) => {
        const langButton = page.getByRole('button', { name: /Switch to (Japanese|英語に切り替え)/ });

        // Check initial language (EN)
        await expect(page.getByText('Designing Future,')).toBeVisible();

        await langButton.click();

        // Should be in JP
        await expect(page.getByText('未来を設計し、')).toBeVisible();

        await langButton.click();

        // Should be back in EN
        await expect(page.getByText('Designing Future,')).toBeVisible();
    });
});
