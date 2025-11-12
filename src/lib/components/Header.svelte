<script lang="ts">
    import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
    import { Button } from "$lib/components/ui/button";
    import ThemeButton from "$lib/components/ui/theme-button/ThemeButton.svelte";



</script>

<div class="border-b-2 bg-sidebar h-12 pt-1">
    <NavigationMenu.Root>
        <NavigationMenu.List class="flex w-screen">
            <NavigationMenu.Item>
                <Button variant="link" href="/">Modules</Button>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
                <Button variant="link" href="/docent">Docent</Button>
            </NavigationMenu.Item>
            <div class="ml-auto mr-2 flex">
                <NavigationMenu.Item>
                    <ThemeButton />
                </NavigationMenu.Item>
            </div>
        </NavigationMenu.List>

    </NavigationMenu.Root>
</div>