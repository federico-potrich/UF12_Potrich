export interface ClassModel {
  index: string;
  name: string;
  hit_die: number;
  proficiency_choices: ProficiencyChoice[];
  proficiencies: _Generic[];
  saving_throws: any[];
  class_levels: string;
  subclasses: _Generic[];
  spellcasting?: Spellcasting;
  url: string;
}

export interface ProficiencyChoice {
  desc : string;
  choose: number;
  type: string;
  from?: _Generic;
}

export interface APIReference {
  index: string;
  name: string;
  url: string;
}

export interface Spellcasting {
  level: number;
  spellcasting_ability: _Generic;
  info: SpellcastingInfo[];
}

export interface SpellcastingInfo {
  name: string;
  desc: string[];
}
export interface _Generic{
  index : string;
  name : string;
  url : string;
  updated_at : string;
}




export interface ClassLevelModel {
  index?: string;
  url?: string;
  level?: number;
  ability_score_bonuses?: number;
  prof_bonus?: number;
  updated_at?: string;

  features?: Feature[];

  spellcasting?: Spellcasting;

  class_specific?: ClassSpecific;
}
export interface ClassSpecific {
  [key: string]: number | string | boolean | undefined;
}
export interface Feature {
  index: string;
  name: string;
  url: string;
}

export interface Spellcasting {
  cantrips_known?: number;
  spells_known?: number;
  spell_slots_level_1?: number;
  spell_slots_level_2?: number;
  spell_slots_level_3?: number;
  spell_slots_level_4?: number;
  spell_slots_level_5?: number;
  spell_slots_level_6?: number;
  spell_slots_level_7?: number;
  spell_slots_level_8?: number;
  spell_slots_level_9?: number;
}
