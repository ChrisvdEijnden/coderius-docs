<script lang="ts">
import { levelColors, ownCurriculum } from "$lib/Curriculum.ts";
import { Badge } from "$lib/components/ui/badge";
import { Button } from "$lib/components/ui/button";
import * as Card from "$lib/components/ui/card/index.js";
import { Separator } from "$lib/components/ui/separator/index.js";
import { cn } from "$lib/utils.ts";

// Extract all unique labels from documents
$: allLabels = Array.from(
	new Set(ownCurriculum.flatMap((activity) => activity.labels)),
).sort();

let selectedLabels: string[] = [];

// Filter documents based on selected labels
$: filteredCurriculum =
	selectedLabels.length === 0
		? ownCurriculum
		: ownCurriculum.filter((activity) =>
				selectedLabels.every((label) => activity.labels.includes(label)),
			);

function toggleLabel(label: string) {
	if (selectedLabels.includes(label)) {
		selectedLabels = selectedLabels.filter((l) => l !== label);
	} else {
		selectedLabels = [...selectedLabels, label];
	}
}

function openLink(link: string) {
	window.open(link, "_blank");
}
</script>

<div class="mx-auto w-[96%]">
	<div class="mt-8">
		<h1 class="text-center text-7xl font-bold">Coderius Education</h1>
	</div>

	<div>
		<!-- Filter Section -->
		<div class="mb-8">
			<h2 class="mb-4 text-lg font-semibold">Filter Labels</h2>
			<div class="flex flex-wrap gap-2">
				{#each allLabels as label}
					<Badge
						variant={selectedLabels.includes(label) ? 'default' : 'secondary'}
						class="cursor-pointer px-3 py-1 transition-opacity hover:opacity-80"
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
			<p class="mt-1 text-sm">{filteredCurriculum.length} cursussen gevonden</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredCurriculum as curriculum}
				<Card.Root class="flex h-full flex-col">
					<Card.Header>
						<Card.Title class="text-lg">{curriculum.title}</Card.Title>
						<div class="mt-3 flex flex-wrap gap-2">
							<!--            Display curriculum level as badge -->
							<Badge
								variant="default"
								class={cn('text-xs ', levelColors[curriculum.level])}
							>
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
						<Button class="w-full" onclick={() => openLink(curriculum.link)}>
							Bekijk lesmateriaal
						</Button>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>

		{#if filteredCurriculum.length === 0}
			<div class="py-12 text-center">
				<p class="text-lg text-gray-500">
					Geen lesmaterialen gevonden met de geselecteerde filters.
				</p>
				<Button variant="outline" class="mt-4" onclick={() => (selectedLabels = [])}>
					Leeg filters
				</Button>
			</div>
		{/if}
	</div>

    <div class="flex mt-8">
        <Card.Root class="mr-2 w-5/12">
            <Card.Header>
                <Card.Title class="text-4xl">Lesmateriaal</Card.Title>
                <Card.Description class="text-xl">Wij maken ons eigen lesmateriaal, gratis voor niets</Card.Description>
            </Card.Header>
            <Card.Content class="text-sm">
                <p>
                    Wij blijven voortdurend zoeken naar manieren om ons lesmateriaal te verbeteren, zowel didactisch als inhoudelijk. 
                    Al ons lesmateriaal is open source, zodat iedereen het vrij kan gebruiken, aanpassen en verder ontwikkelen. 
                    Veel van het materiaal is opgebouwd met eigen ontwikkelde tools en frameworks, waarmee we de best mogelijke leerervaring willen creëren. 
                    We nodigen leraren van harte uit om onze lessen te gebruiken, aan te passen en te delen op een manier die past bij hun leerlingen. 
                    Heb je ideeën, suggesties of wil je zelf bijdragen aan nieuw lesmateriaal? Neem dan gerust contact met ons op!
                </p>
            </Card.Content>
        </Card.Root>
        <Card.Root class="w-7/12">
            <Card.Header>
                <Card.Title class="text-4xl">Visie</Card.Title>
                <Card.Description class="text-lg">Onze visie is gebaseerd op leren met de praktijk</Card.Description>
            </Card.Header>
            <Card.Content class="text-sm">
                <p>
                    Wij geloven dat leren het beste gebeurt door te doen. Daarom is ons lesmateriaal zo ontwikkeld dat studenten actief worden betrokken bij het leerproces. 
                    In onze cursussen combineren we theorie met praktische opdrachten, projecten en realistische voorbeelden die de leerstof tot leven brengen. 
                    Ons doel is om lesmateriaal te maken dat niet alleen informatief is, maar ook inspirerend en leuk om mee te werken. 
                    Door studenten volop de kans te geven hun kennis direct toe te passen, bereiden we hen beter voor op de echte uitdagingen binnen de technologie-industrie. 
                    Samen met docenten blijven we ons materiaal voortdurend verbeteren, zodat de leerervaring steeds beter en effectiever wordt.
                </p>
            </Card.Content>
        </Card.Root>
    </div>
	<Separator class="my-4" />

	<div class="mt-8 flex">
		<Card.Root class="mr-2 w-5/12">
			<Card.Header>
				<Card.Title class="text-4xl">Lesmateriaal</Card.Title>
				<Card.Description class="text-xl">Wij maken ons eigen lesmateriaal</Card.Description
				>
			</Card.Header>
			<Card.Content class="text-sm">
				<p>
					Wij kijken continu naar manieren om ons lesmateriaal te verbeteren, didactisch
					en inhoudelijk.
				</p>
				<p>
					Ons lesmateriaal is open source en kan door iedereen gebruikt en aangepast
					worden.
				</p>
				<p>
					Het is gebaseerd op vaak zelf gebouwde tools en frameworks, zodat we de beste
					leerervaring kunnen bieden.
				</p>
				<p>
					We moedigen leraren aan om ons materiaal te gebruiken en aan te passen aan hun
					eigen behoeften.
				</p>
				<p>
					Heb je suggesties of wil je zelf lesmateriaal aanleveren? Neem dan contact met
					ons op!
				</p>
			</Card.Content>
		</Card.Root>
		<Card.Root class="w-7/12">
			<Card.Header>
				<Card.Title class="text-4xl">Visie</Card.Title>
				<Card.Description class="text-lg"
					>Onze visie is gebaseerd op leren met de praktijk</Card.Description
				>
			</Card.Header>
			<Card.Content class="text-sm">
				<p>
					Wij geloven dat leren het beste gebeurt door te doen. Daarom is ons lesmateriaal
					ontworpen om studenten actief te betrekken bij het leerproces.
				</p>
				<p>
					Onze cursussen bevatten veel praktische oefeningen, projecten en real-world
					voorbeelden om de concepten tot leven te brengen.
				</p>
				<p>
					We streven ernaar om lesmateriaal te creëren dat niet alleen informatief is,
					maar ook leuk en boeiend.
				</p>
				<p>
					Door studenten de kans te geven om hun vaardigheden in de praktijk te brengen,
					bereiden we hen beter voor op echte uitdagingen in de technologie-industrie.
				</p>
				<p>
					Samen met docenten werken we continu aan het verbeteren van ons materiaal om de
					leerervaring te optimaliseren.
				</p>
			</Card.Content>
		</Card.Root>
	</div>
</div>
