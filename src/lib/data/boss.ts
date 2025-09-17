import { z } from "zod";
import GladiusImage from "$lib/assets/nightlords/Gladius.png";
import AdelImage from "$lib/assets/nightlords/Adel.png";
import GnostarImage from "$lib/assets/nightlords/Gnostar.png";
import MarisImage from "$lib/assets/nightlords/Maris.png";
import LibraImage from "$lib/assets/nightlords/Libra.png";
import FulghorImage from "$lib/assets/nightlords/Fulghor.png";
import CaligoImage from "$lib/assets/nightlords/Caligo.png";
import HeolstorImage from "$lib/assets/nightlords/Heolstor.png";

// 1日目ボスリスト
export const FirstBosses = z.enum([
  "亜人の女王＆亜人の剣聖",
  "鈴玉狩り",
  "貪食ドラゴン",
  "ミミズ顔",
  "夜の騎兵×2",
  "英雄のガーゴイル",
  "公のフレイディア",
  "百足のデーモン",
  "戦場の宿将",
  "熔鉄デーモン",
  "ティビアの呼び舟",
  "爛れた樹霊",
  "接ぎ木の君主",
  "王族の幽鬼",
]);

export type FirstBoss = z.infer<typeof FirstBosses>;

// 1日目ボス情報スキーマ
const FirstBossInfoSchema = z.object({
  // 名前
  name: z.string(),
});

// 1日目ボス情報
export const FirstBossInfoMap: Record<FirstBoss, z.infer<typeof FirstBossInfoSchema>> = {
  [FirstBosses.enum["亜人の女王＆亜人の剣聖"]]: { name: "亜人の女王＆亜人の剣聖" },
  [FirstBosses.enum["鈴玉狩り"]]: { name: "鈴玉狩り" },
  [FirstBosses.enum["貪食ドラゴン"]]: { name: "貪食ドラゴン" },
  [FirstBosses.enum["ミミズ顔"]]: { name: "ミミズ顔" },
  [FirstBosses.enum["夜の騎兵×2"]]: { name: "夜の騎兵×2" },
  [FirstBosses.enum["英雄のガーゴイル"]]: { name: "英雄のガーゴイル" },
  [FirstBosses.enum["公のフレイディア"]]: { name: "公のフレイディア" },
  [FirstBosses.enum["百足のデーモン"]]: { name: "百足のデーモン" },
  [FirstBosses.enum["戦場の宿将"]]: { name: "戦場の宿将" },
  [FirstBosses.enum["熔鉄デーモン"]]: { name: "熔鉄デーモン" },
  [FirstBosses.enum["ティビアの呼び舟"]]: { name: "ティビアの呼び舟" },
  [FirstBosses.enum["爛れた樹霊"]]: { name: "爛れた樹霊" },
  [FirstBosses.enum["接ぎ木の君主"]]: { name: "接ぎ木の君主" },
  [FirstBosses.enum["王族の幽鬼"]]: { name: "王族の幽鬼" },
};

// 夜の王リスト
export const Nightlords = z.enum([
  // グラディウス
  "Gladius",
  // エデレ
  "Adel",
  // グノスター
  "Gnostar",
  // マリス
  "Maris",
  // リブラ
  "Libra",
  // フルゴール
  "Fulghor",
  // カリゴ
  "Caligo",
  // ナメレス
  "Heolstor",
]);

export type Nightlord = z.infer<typeof Nightlords>;

// 夜の王情報スキーマ
const NightlordInfoSchema = z.object({
  // 名前
  name: z.string(),
  // 画像
  src: z.string(),
  // 1日目ボス候補
  firstBossCandidates: z.set(FirstBosses),
});

// 夜の王情報
export const NightlordInfoMap: Record<z.infer<typeof Nightlords>, z.infer<typeof NightlordInfoSchema>> = {
  [Nightlords.enum["Gladius"]]: {
    name: "グラディウス",
    src: GladiusImage,
    firstBossCandidates: new Set([FirstBosses.enum["亜人の女王＆亜人の剣聖"], FirstBosses.enum["鈴玉狩り"]]),
  },
  [Nightlords.enum["Adel"]]: {
    name: "エデレ",
    src: AdelImage,
    firstBossCandidates: new Set([
      FirstBosses.enum["貪食ドラゴン"],
      FirstBosses.enum["ミミズ顔"],
      FirstBosses.enum["夜の騎兵×2"],
      FirstBosses.enum["英雄のガーゴイル"],
      FirstBosses.enum["公のフレイディア"],
    ]),
  },
  [Nightlords.enum["Gnostar"]]: {
    name: "グノスター",
    src: GnostarImage,
    firstBossCandidates: new Set([
      FirstBosses.enum["百足のデーモン"],
      FirstBosses.enum["戦場の宿将"],
      FirstBosses.enum["熔鉄デーモン"],
      FirstBosses.enum["ティビアの呼び舟"],
      FirstBosses.enum["爛れた樹霊"],
    ]),
  },
  [Nightlords.enum["Maris"]]: {
    name: "マリス",
    src: MarisImage,
    firstBossCandidates: new Set([
      FirstBosses.enum["貪食ドラゴン"],
      FirstBosses.enum["ミミズ顔"],
      FirstBosses.enum["英雄のガーゴイル"],
      FirstBosses.enum["熔鉄デーモン"],
      FirstBosses.enum["接ぎ木の君主"],
    ]),
  },
  [Nightlords.enum["Libra"]]: {
    name: "リブラ",
    src: LibraImage,
    firstBossCandidates: new Set([
      FirstBosses.enum["公のフレイディア"],
      FirstBosses.enum["百足のデーモン"],
      FirstBosses.enum["戦場の宿将"],
      FirstBosses.enum["ティビアの呼び舟"],
      FirstBosses.enum["王族の幽鬼"],
    ]),
  },
  [Nightlords.enum["Fulghor"]]: {
    name: "フルゴール",
    src: FulghorImage,
    firstBossCandidates: new Set([
      FirstBosses.enum["貪食ドラゴン"],
      FirstBosses.enum["ミミズ顔"],
      FirstBosses.enum["夜の騎兵×2"],
      FirstBosses.enum["百足のデーモン"],
      FirstBosses.enum["戦場の宿将"],
      FirstBosses.enum["王族の幽鬼"],
    ]),
  },
  [Nightlords.enum["Caligo"]]: {
    name: "カリゴ",
    src: CaligoImage,
    firstBossCandidates: new Set([
      FirstBosses.enum["公のフレイディア"],
      FirstBosses.enum["熔鉄デーモン"],
      FirstBosses.enum["ティビアの呼び舟"],
      FirstBosses.enum["爛れた樹霊"],
      FirstBosses.enum["接ぎ木の君主"],
    ]),
  },
  [Nightlords.enum["Heolstor"]]: {
    name: "ナメレス",
    src: HeolstorImage,
    firstBossCandidates: new Set([...FirstBosses.options]),
  },
};
