import { expect, test } from '@playwright/test'

test.describe('site navigation and key content', () => {
  test('home page renders expected sections and cat tooltip', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: 'Maxi Gimenez' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Side projects' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Latest blog posts' })).toBeVisible()

    const catTrigger = page.getByText('my cat')
    await catTrigger.hover()
    await expect(page.getByAltText('Annu the cat')).toBeVisible()
  })

  test('bookmark links navigate across home, blog, and shipping pages', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('link', { name: 'Blog' }).first().click()
    await expect(page).toHaveURL(/\/blog$/)

    await page.getByRole('link', { name: 'Shiping' }).first().click()
    await expect(page).toHaveURL(/\/shipping$/)
    await expect(page.getByRole('heading', { name: 'Log' })).toBeVisible()

    await page.getByRole('link', { name: 'Home' }).first().click()
    await expect(page).toHaveURL(/\/$/)
  })

  test('can open a blog post and return home from bookmark links', async ({ page }) => {
    await page.goto('/blog')

    await page
      .getByRole('link', { name: /Why Every Startup Should Build a Component Library/i })
      .click()

    await expect(page).toHaveURL(/\/post\/every-startup-needs-component-library$/)
    await expect(
      page.getByRole('heading', {
        name: 'Why Every Startup Should Build a Component Library',
      }),
    ).toBeVisible()

    await page.getByRole('link', { name: 'Home' }).first().click()
    await expect(page).toHaveURL(/\/$/)
  })

  test('home links include shipping and external profiles', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('link', { name: 'building' }).click()
    await expect(page).toHaveURL(/\/shipping$/)

    const githubLink = page.getByRole('link', { name: 'GitHub' }).first()
    const linkedInLink = page.getByRole('link', { name: 'LinkedIn' }).first()
    await expect(githubLink).toHaveAttribute('href', /github\.com\/maxigimenez/)
    await expect(linkedInLink).toHaveAttribute('href', /linkedin\.com\/in\/maxigimenez/)
  })
})
