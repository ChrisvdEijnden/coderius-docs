<script lang="ts">
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";

    import { Button } from "$lib/components/ui/button/index.js";

    import { getContext } from "svelte";
    import { THEME_CONTEXT_KEY, type Theme } from "$lib/context/theme/Theme";

    const themeContext = getContext<{ current: Theme; set: (theme: Theme) => void }>(THEME_CONTEXT_KEY);

    function toggleTheme() {
        const newTheme = themeContext.current === 'light' ? 'dark' : 'light';
        themeContext.set(newTheme);
    }
</script>

<Button onclick={toggleTheme} variant="outline" size="icon">
    <SunIcon
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <MoonIcon
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
</Button>