# CHET - Character Hub for Emotional Talk (v2.2.1)

## Tree Structure

```
CHET Application (v2.2.1)
├── Core Application
│   ├── Entry Point: React-based SPA with TypeScript
│   ├── Version: 2.2.1
│   └── Key Features
│       ├── AI-powered character chat system
│       ├── Multimedia generation (images, videos, voice)
│       ├── Intimacy level tracking (-100 to +100)
│       ├── Character profile management
│       └── Session context preservation
│
├── Type Definitions
│   ├── UserProfile
│   ├── CharacterProfile
│   │   ├── basicInfo
│   │   ├── physicalStyle
│   │   └── personalityContext
│   ├── Character
│   ├── Message
│   ├── Media
│   ├── SessionContext
│   ├── RacePhysicalCharacteristics
│   └── PowerSystem
│
├── Global State Management
│   ├── AI and User State
│   │   ├── ai: GoogleGenAI | null
│   │   ├── userProfile: UserProfile | null
│   │   └── characters: Character[]
│   ├── Chat State
│   │   ├── activeChat: Chat | null
│   │   ├── activeCharacterId: string | null
│   │   └── activeCharacterSessionContext: SessionContext | null
│   └── UI State
│       ├── isGeneratingResponse: boolean
│       └── isFirstMessageInSession: boolean
│
├── Core Functional Modules
│   ├── Authentication & API Management
│   │   ├── initializeGenAI(): Google GenAI initialization
│   │   ├── API Key handling: LocalStorage persistence
│   │   └── Safety settings: Configurable content filtering
│   │
│   ├── Character System
│   │   ├── Character Creation
│   │   │   ├── Profile generation with AI
│   │   │   ├── Avatar/image generation
│   │   │   └── Race-specific traits
│   │   │       ├── Vampire
│   │   │       ├── Demon
│   │   │       ├── Angel
│   │   │       ├── Elf
│   │   │       ├── Orc
│   │   │       ├── Fairy
│   │   │       ├── Werewolf
│   │   │       ├── Dragonkin
│   │   │       ├── Beast Human
│   │   │       └── Human
│   │   └── Character Storage
│   │       ├── IndexedDB persistence
│   │       ├── Migration from legacy formats
│   │       └── Session context management
│   │
│   ├── Chat Engine
│   │   ├── startChat(): Initialize character conversation
│   │   ├── Message handling
│   │   │   ├── Text messages
│   │   │   ├── Image messages
│   │   │   └── Voice messages
│   │   ├── Intimacy system: -100 to +100 relationship tracking
│   │   └── Power mechanics: Race-specific abilities
│   │       ├── LOW level
│   │       ├── MID level
│   │       ├── HIGH level
│   │       └── MAX level
│   │
│   ├── Media Generation
│   │   ├── Image Creation
│   │   │   ├── Perspective detection (selfie vs viewer)
│   │   │   ├── Session context chaining
│   │   │   └── Reference image management
│   │   ├── Voice Synthesis
│   │   │   ├── TTS streaming
│   │   │   ├── WAV file generation
│   │   │   └── Audio playback controls
│   │   └── Video Generation
│   │       ├── Short selfie-style clips
│   │       └── Context-aware prompting
│   │
│   └── UI Components
│       ├── Home Screen
│       │   ├── Contact list
│       │   └── Character management
│       ├── Character Creation
│       │   ├── Profile editor
│       │   └── Avatar generator
│       ├── Chat Interface
│       │   ├── Message bubbles
│       │   ├── Intimacy meter
│       │   └── Media gallery
│       └── Settings Panel
│           ├── User profile
│           └── API configuration
│
├── Key Algorithms & Systems
│   ├── Intimacy Progression
│   │   ├── Tiered relationship levels (-100 to +100)
│   │   ├── Behavior adaptation based on intimacy score
│   │   └── Automatic adjustments through conversation analysis
│   │
│   ├── Image Perspective Detection
│   │   ├── Selfie context
│   │   │   ├── Personal moments
│   │   │   ├── Phone usage
│   │   │   └── Mirrors
│   │   ├── Viewer context
│   │   │   ├── Face-to-face meetings
│   │   │   └── Social settings
│   │   └── Automatic switching: Context-aware algorithm
│   │
│   └── Race Power Systems
│       ├── Each race has unique abilities with 4 activation levels
│       │   ├── LOW: Subtle enhancements
│       │   ├── MID: Noticeable effects
│       │   ├── HIGH: Significant power manifestation
│       │   └── MAX: Ultimate ability unleashing
│       └── Available Races
│           ├── Vampire: Blood Siphon
│           ├── Demon: Infernal Contract
│           ├── Angel: Celestial Radiance
│           ├── Elf: Nature's Grasp
│           ├── Orc: Berserker's Rage
│           ├── Fairy: Mischievous Veil
│           ├── Werewolf: Lunar Instinct
│           ├── Dragonkin: Draconic Ascension
│           ├── Beast Human: Primal Aspect
│           └── Human: Adaptive Will
│
├── Data Flow Architecture
│   ├── User Input
│   ├── Chat Engine
│   ├── AI Processing
│   ├── Response Generation
│   ├── Media Creation
│   ├── UI Rendering
│   └── State Persistence
│
├── Storage & Persistence
│   ├── IndexedDB: Primary storage for characters and media
│   ├── LocalStorage: User preferences and API keys
│   ├── Session Management: Context preservation across visits
│   └── Export/Import: ZIP-based backup system
│
├── Security & Privacy
│   ├── Client-side processing: No server data storage
│   ├── API key isolation: User-specific credentials
│   ├── Content safety: Configurable filtering levels
│   └── Data encryption: Base64 encoding for media
│
├── Performance Optimizations
│   ├── Chat history trimming: Limited message window
│   ├── Lazy loading: Media gallery pagination
│   ├── Memory management: Reference cleanup
│   └── Caching: Avatar and profile reuse
│
└── Internationalization
    ├── Primary language: Indonesian with English mixing
    ├── Translation system: Context-aware conversion
    └── Locale handling: Timezone and cultural adaptations
```