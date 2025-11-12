<script lang="ts">
    import { setContext } from "svelte";
    import { browser } from '$app/environment';
    import { type Theme, THEME_CONTEXT_KEY } from "$lib/context/theme/Theme";

    let { children }: { children: any } = $props();

    // Initialize with default value, will be updated in onMount
    let themeState = $state<Theme>('dark');

    // Only access localStorage in the browser
    if (browser) {
        const savedTheme = window.localStorage.getItem('theme') as Theme;
        themeState = savedTheme || 'dark';
    }

    const themeContext = {
        get current() {
            return themeState;
        },
        set: (newTheme: Theme) => {
            themeState = newTheme;
        }
    };

    setContext(THEME_CONTEXT_KEY, themeContext);

    $effect(() => {
        if (browser) {
            window.localStorage.setItem('theme', themeState);
            document.documentElement.className = themeState;
        }
    });
</script>

{@render children?.()}