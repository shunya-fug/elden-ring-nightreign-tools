<script lang="ts">
  import { type FirstBoss, FirstBossInfoMap, Nightlords, type Nightlord, NightlordInfoMap } from "$lib/data/boss";
  import { RotateCcw } from "lucide-svelte";

  // 1日目ボス
  let firstBoss: FirstBoss | undefined = $state();
  // 夜の王候補
  let nightlordCandidates: Nightlord[] | undefined = $derived.by(() => {
    if (!firstBoss) {
      return undefined;
    }
    return Object.entries(NightlordInfoMap)
      .filter(([, nightlordInfo]) => nightlordInfo.firstBossCandidates.has(firstBoss!))
      .map(([key]) => key as Nightlord);
  });
</script>

<main class="prose m-4 mx-auto px-8">
  <h1 class="text-center text-lg md:text-2xl 2xl:text-3xl break-keep">エルデンリング ナイトレイン 夜の王候補検索</h1>
  <!-- 1日目ボス選択 -->
  <fieldset class="fieldset flex flex-col justify-stretch gap-2 px-5 pt-2 pb-4 rounded-box border">
    <legend class="fieldset-legend text-xs md:text-lg px-1 md:px-2">1日目ボス</legend>
    {#each Object.entries(FirstBossInfoMap) as [key, firstBossInfo]}
      {#if !firstBoss || firstBoss === key}
        <div class="flex gap-2 content-center">
          <input
            class="input btn btn-soft grow hover:cursor-pointer"
            type="radio"
            name="nightlords"
            aria-label={firstBossInfo.name}
            bind:group={firstBoss}
            value={key}
          />
          {#if firstBoss}
            <button class="input btn btn-soft btn-square hover:cursor-pointer" onclick={() => (firstBoss = undefined)}>
              <RotateCcw />
            </button>
          {/if}
        </div>
      {/if}
    {/each}
  </fieldset>
  <!-- 夜の王候補表示 -->
  <ul class="list list-none p-0 mx-6">
    <li class="text-xs md:text-lg tracking-wide" class:hidden={!nightlordCandidates}>夜の王候補</li>
    {#each Nightlords.options as nightlord}
      {#if nightlordCandidates && nightlordCandidates.includes(nightlord)}
        <li class="list-row pt-0">
          <div>
            <img
              class="size-10 rounded-box"
              style:margin="0"
              src={NightlordInfoMap[nightlord].src}
              alt={NightlordInfoMap[nightlord].name}
            />
          </div>
          <div class="content-center">
            <div class="text-lg">{NightlordInfoMap[nightlord].name}</div>
          </div>
        </li>
      {/if}
    {/each}
  </ul>
</main>
