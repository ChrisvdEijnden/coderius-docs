<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
    import {curriculum, levelColors} from "$lib/Curriculum.ts";
    import {cn} from "$lib/utils.ts";
    import { Separator } from "$lib/components/ui/separator/index.js";


    // Extract all unique labels from documents
    $: allLabels = Array.from(
      new Set(curriculum.flatMap(activity => activity.labels))
    ).sort();

    let selectedLabels: string[] = [];

    // Filter documents based on selected labels
    $: filteredCurriculum = selectedLabels.length === 0
      ? curriculum
      : curriculum.filter(activity =>
        selectedLabels.every(label => activity.labels.includes(label))
      );

    function toggleLabel(label: string) {
        if (selectedLabels.includes(label)) {
            selectedLabels = selectedLabels.filter(l => l !== label);
        } else {
            selectedLabels = [...selectedLabels, label];
        }
    }

    function openLink(link: string) {
        window.open(link, "_blank");
    }
</script>

<div class="w-[96%] mx-auto">
    <div class="mt-8">
        <h1 class="text-7xl text-center font-bold">Coderius Education</h1>
    </div>

    <div>
        <!-- Filter Section -->
        <div class="mb-8">
            <h2 class="text-lg font-semibold mb-4">Filter Labels</h2>
            <div class="flex flex-wrap gap-2">
                {#each allLabels as label}
                    <Badge
                      variant={selectedLabels.includes(label) ? "default" : "secondary"}
                      class="cursor-pointer hover:opacity-80 transition-opacity px-3 py-1"
                      onclick={() => toggleLabel(label)}
                    >
                        {label}
                    </Badge>
                {/each}
            </div>
        </div>

        <!-- Documents Grid -->
        <div class="mb-6">
            <h2 class="text-2xl font-bold">Lesmateriaal</h2>
            <p class="text-sm mt-1">{filteredCurriculum.length} cursussen gevonden</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each filteredCurriculum as curriculum}
                <Card.Root class="flex flex-col h-full">
                    <Card.Header>
                        <Card.Title class="text-lg">{curriculum.title}</Card.Title>
                        <div class="flex flex-wrap gap-2 mt-3">
                            <!--            Display curriculum level as badge -->
                            <Badge variant="default" class={cn("text-xs ", levelColors[curriculum.level])}>
                                Niveau: {curriculum.level}
                            </Badge>
                            {#each curriculum.labels as label}
                                <Badge variant="outline" class="text-xs">
                                    {label}
                                </Badge>
                            {/each}
                        </div>
                    </Card.Header>
                    <Card.Content class="mt-auto">
                        <Button
                          class="w-full"
                          onclick={() => openLink(curriculum.link)}
                        >
                            Bekijk lesmateriaal
                        </Button>
                    </Card.Content>
                </Card.Root>
            {/each}
        </div>

        {#if filteredCurriculum.length === 0}
            <div class="text-center py-12">
                <p class="text-gray-500 text-lg">Geen lesmaterialen gevonden met de geselecteerde filters.</p>
                <Button
                  variant="outline"
                  class="mt-4"
                  onclick={() => selectedLabels = []}
                >
                    Leeg filters
                </Button>
            </div>
        {/if}
    </div>

    <Separator class="my-4" />

    <div class="flex mt-8">
        <Card.Root class="mr-2 w-5/12">
            <Card.Header>
                <Card.Title class="text-4xl">Lesmateriaal</Card.Title>
                <Card.Description class="text-xl">Wij maken ons eigen lesmateriaal, gratis voor niets</Card.Description>
            </Card.Header>
            <Card.Content class="text-sm">
                <p>Wij kijken continu naar manieren om ons lesmateriaal te verbeteren, didactisch en inhoudelijk.</p>
                <p>Ons lesmateriaal is open source en kan door iedereen gebruikt en aangepast worden.</p>
                <p>Het is gebaseerd op vaak zelf gebouwde tools en frameworks, zodat we de beste leerervaring kunnen bieden.</p>
                <p>We moedigen leraren aan om ons materiaal te gebruiken en aan te passen aan hun eigen behoeften.</p>
                <p>Heb je suggesties of wil je zelf lesmateriaal aanleveren? Neem dan contact met ons op!</p>
            </Card.Content>
        </Card.Root>
        <Card.Root class="w-7/12">
            <Card.Header>
                <Card.Title class="text-4xl">Visie</Card.Title>
                <Card.Description class="text-lg">Onze visie is gebaseerd op leren met de praktijk</Card.Description>
            </Card.Header>
            <Card.Content class="text-sm">
                <p>Wij geloven dat leren het beste gebeurt door te doen. Daarom is ons lesmateriaal ontworpen om studenten actief te betrekken bij het leerproces.</p>
                <p>Onze cursussen bevatten veel praktische oefeningen, projecten en real-world voorbeelden om de concepten tot leven te brengen.</p>
                <p>We streven ernaar om lesmateriaal te creëren dat niet alleen informatief is, maar ook leuk en boeiend.</p>
                <p>Door studenten de kans te geven om hun vaardigheden in de praktijk te brengen, bereiden we hen beter voor op echte uitdagingen in de technologie-industrie.</p>
                <p>Samen met docenten werken we continu aan het verbeteren van ons materiaal om de leerervaring te optimaliseren.</p>
            </Card.Content>
        </Card.Root>
    </div>

</div>