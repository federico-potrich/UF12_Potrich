export interface Monster{
    _id: string
    index: string
    name: string
    desc: string
    size: string
    type: string
    subtype: string
    alignment: string
    armor_class: ArmorClass[]
    hit_points: number
    hit_dice: string
    hit_points_roll: string
    speed: Speed
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    proficiencies: Proficiency[]
    damage_vulnerabilities: any[]
    damage_resistances: any[]
    damage_immunities: any[]
    condition_immunities: any[]
    senses: Senses
    languages: string
    challenge_rating: number
    proficiency_bonus: number
    xp: number
    special_abilities: SpecialAbility[]
    actions: Action[]
    image: string
    url: string
    updated_at: string
    forms: any[]
    legendary_actions: any[]
    reactions: any[]
  }
  
  export interface ArmorClass {
    type: string
    value: number
  }
  
  export interface Speed {
    walk: string
    _id: string
  }
  
  export interface Proficiency {
    _id: string
    value: number
    proficiency: Proficiency2
  }
  
  export interface Proficiency2 {
    index: string
    name: string
    url: string
    _id: string
  }
  
  export interface Senses {
    passive_perception: number
    _id: string
  }
  
  export interface SpecialAbility {
    _id: string
    name: string
    desc: string
    spellcasting: Spellcasting
    damage: any[]
  }
  
  export interface Spellcasting {
    level: number
    ability: Ability
    dc: number
    modifier: number
    components_required: string[]
    school: string
    slots: Slots
    spells: Spell[]
    _id: string
  }
  
  export interface Ability {
    index: string
    name: string
    url: string
    _id: string
  }
  
  export interface Slots {
    "1": number
  }
  
  export interface Spell {
    _id: string
    name: string
    level: number
    url: string
  }
  
  export interface Action {
    _id: string
    name: string
    desc: string
    attack_bonus: number
    damage: Damage[]
    actions: any[]
  }
  
  export interface Damage {
    _id: string
    damage_type: DamageType
    damage_dice: string
  }
  
  export interface DamageType {
    index: string
    name: string
    url: string
    _id: string
  }
  