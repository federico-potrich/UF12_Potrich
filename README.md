# DND Project

## Scopo
Offrire un servizio per visualizzare dati relativi a DnD(Dungeons and Dragons) stile manuale, ma anche la possibilità di creare una schedina per il personaggio

## Per avviare il progetto
1. clonare la repository
2. cd UF12_Potrich
3. npm install
4. ng serve

## Rotte Principali

| Percorso                 | Componente                    | Descrizione                                                      |
| ------------------------ | ----------------------------- | ---------------------------------------------------------------- |
| `/`                      | `HomePageComponent`           | Pagina iniziale dell'app.                                        |
| `/view`                  | `GeneralDisplayCardComponent` | Contenitore per la visualizzazione dei contenuti.                |
| `/view/classes`          | `ClassesComponentComponent`   | Visualizzazione delle classi.                                    |
| `/view/character`        | `CharacterDataComponent`      | Sezione del personaggio, include sotto-sezioni:                  |
| ├── `ability-scores`     | `AbilityScoresComponent`      | - Punteggi di abilità.                                           |
| ├── `alignments`         | `AlignmentsComponent`         | - Allineamenti.                                                  |
| ├── `backgrounds`        | `BackgroundsComponent`        | - Background dei personaggi.                                     |
| ├── `languages`          | `LanguagesComponent`          | - Lingue conosciute.                                             |
| ├── `proficiencies`      | `ProficienciesComponent`      | - Competenze.                                                    |
| └── `skills`             | `SkillsComponent`             | - Abilità.                                                       |
| `/view/monsters`         | `MonsterComponent`            | Lista dei mostri.                                                |
| `/view/races`            | `MonsterComponent`            | Lista delle razze.                                               |
| `/view/equipment/:index` | `EquipmentPageComponent`      | Dettagli di un equipaggiamento.                                  |
| `/view/:type/:index`     | `DetailsComponent`            | Dettagli generico per altri tipi (es. incantesimi, razze...)     |
| `/edit/:category/:index` | `EditPostComponent`           | Modifica di un contenuto esistente.                              |
| `/post/:category`        | `PostNewItemComponent`        | Creazione di un nuovo contenuto.                                 |
| `/delete/classes`        | `ClassesComponentComponent`   | Gestione della cancellazione delle classi (in fase di sviluppo). |
| `/character`             | `CharacterDataComponent`      | Accesso diretto ai dati del personaggio.                         |
| `**`                     | `NotFoundComponent`           | Rotta di fallback per percorsi non validi.                       |

# Nuova Feature (semplificata)
## creazione di una schedina... 
Sulla barra è presente una voce che permette di creare una schedina per giocare a DnD, al momento è presente poca roba, ma potrebbe aumentare permettendo alle persone di scegliere inoltre equipaggiamento e gli incantesimi (oppure direttamente dal sito di effettuare i tiri per calcolare la roba)!

