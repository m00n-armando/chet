# CHET Codebase Decomposition Plan

## Overview
The current `index.tsx` file is a monolithic 6,000+ line file that contains all functionality. This plan breaks it down into logical modules to improve maintainability, readability, and collaboration.

## Proposed Module Structure

### 1. Core Modules
```
/src
  ├── /core
  │   ├── types.ts              # All interfaces and type definitions
  │   ├── constants.ts           # Global constants and configuration
  │   ├── state.ts              # Global state management
  │   └── api.ts                # API initialization and management
  ├── /utils
  │   ├── helpers.ts           # Utility functions
  │   ├── storage.ts            # Storage services (import from existing)
  │   └── media.ts              # Media processing utilities
  ├── /components
  │   ├── /ui                   # Reusable UI components
  │   ├── /screens              # Screen-specific components
  │   └── /modals               # Modal components
  ├── /services
  │   ├── character-service.ts   # Character management
  │   ├── chat-service.ts       # Chat engine
  │   ├── media-service.ts      # Media generation
  │   └── audio-service.ts      # Audio processing
  ├── /features
  │   ├── /character-creation   # Character creation workflow
  │   ├── /chat                 # Chat functionality
  │   ├── /media-gallery        # Media viewing/editing
  │   └── /settings             # User settings
  └── main.tsx                  # Application entry point
```

### 2. Detailed Module Breakdown

#### 2.1 Core Types (/src/core/types.ts)
- Move all interfaces: UserProfile, CharacterProfile, Character, Message, Media, etc.
- Race-specific types: RacePhysicalCharacteristics, PowerSystem
- Session types: SessionContext, AIContextualTime
- Enums and type aliases

#### 2.2 Constants (/src/core/constants.ts)
- Safety settings map
- Generation configuration
- Role to intimacy mapping
- Race physical characteristics database
- Race power systems database
- Character profile schema
- Icon definitions

#### 2.3 Global State (/src/core/state.ts)
- All global variables:
  - ai, userProfile, characters
  - activeChat, activeCharacterId
  - Session contexts
  - UI state variables
- State initialization functions
- State accessor functions

#### 2.4 API Management (/src/core/api.ts)
- initializeGenAI function
- API key handling
- Status logging functions

#### 2.5 Utility Functions (/src/utils/helpers.ts)
- getRandomElement
- createCleanSessionContext
- updateRoleOptions
- showScreen/hideLoading
- resetCharacterCreation
- migrateCharacter
- formatTimestamp
- getContextualTime
- getIANATimezone
- translateTextToEnglish
- detectImagePerspective
- parseMarkdown
- getIntimacyTierTitle

#### 2.6 Character Service (/src/services/character-service.ts)
- generateCharacterProfile
- Character creation and management
- Profile editing functions
- Migration functions

#### 2.7 Chat Service (/src/services/chat-service.ts)
- startChat
- Chat message handling
- Intimacy level management
- Power system integration
- Message rendering functions

#### 2.8 Media Service (/src/services/media-service.ts)
- Image generation pipeline
- Perspective detection
- Reference image management
- Media prompt construction
- Gallery management

#### 2.9 Audio Service (/src/services/audio-service.ts)
- Voice message recording
- Speech data generation
- Audio processing utilities
- WAV generation helpers
- Playback controls

#### 2.10 UI Components
##### Screens (/src/components/screens/)
- Home screen component
- Character creation screen
- Chat screen
- Media gallery screen
- Edit character screen

##### Modals (/src/components/modals/)
- User profile modal
- API key modal
- Settings modal
- Image viewer modal
- Video viewer modal
- Image retry modal
- Image edit modal
- Avatar prompt modal
- Manual image modal
- Recording modal
- Imagen fallback modal
- Reference gallery modal

##### Reusable UI (/src/components/ui/)
- Contact list item
- Message bubble
- Media item
- Character header
- Intimacy meter
- Power display

#### 2.11 Features
##### Character Creation (/src/features/character-creation/)
- Sheet generation workflow
- Avatar creation
- Profile editing
- Preview system

##### Chat (/src/features/chat/)
- Message input handling
- Chat history rendering
- Real-time messaging
- Media integration

##### Media Gallery (/src/features/media-gallery/)
- Image viewing
- Video playback
- Media editing
- Gallery navigation

##### Settings (/src/features/settings/)
- User profile management
- API configuration
- Feature toggles
- Data import/export

#### 2.12 Main Entry Point (/src/main.tsx)
- Application initialization
- Routing between screens
- Event listener setup
- Service worker registration

### 3. Implementation Steps

#### Phase 1: Core Structure (Week 1)
1. Create directory structure
2. Move type definitions to /src/core/types.ts
3. Move constants to /src/core/constants.ts
4. Move global state to /src/core/state.ts
5. Move API management to /src/core/api.ts

#### Phase 2: Utility Functions (Week 1-2)
1. Move utility functions to /src/utils/
2. Create helper modules for different utility categories
3. Ensure proper imports/exports

#### Phase 3: Services Layer (Week 2-3)
1. Extract character service
2. Extract chat service
3. Extract media service
4. Extract audio service
5. Define clear service interfaces

#### Phase 4: UI Components (Week 3-4)
1. Extract screen components
2. Extract modal components
3. Create reusable UI component library
4. Implement proper component hierarchy

#### Phase 5: Feature Modules (Week 4-5)
1. Organize by feature areas
2. Implement feature-specific routing
3. Connect features to core services

#### Phase 6: Main Entry Point (Week 5)
1. Create new main.tsx
2. Connect all modules
3. Implement proper dependency injection
4. Test application functionality

### 4. Benefits of This Approach

1. **Improved Maintainability**
   - Smaller, focused files
   - Clear separation of concerns
   - Easier to locate and modify specific functionality

2. **Better Collaboration**
   - Multiple developers can work on different modules
   - Reduced merge conflicts
   - Clear ownership of code areas

3. **Enhanced Testability**
   - Isolated units of functionality
   - Easier to mock dependencies
   - Better test coverage

4. **Scalability**
   - Easy to add new features
   - Modular architecture supports growth
   - Reusable components

5. **Performance**
   - Potential for code splitting
   - Better bundling optimization
   - Reduced initial load times

### 5. Migration Considerations

1. **Dependency Management**
   - Careful handling of cross-module dependencies
   - Circular dependency avoidance
   - Proper import/export organization

2. **State Management**
   - Maintaining global state accessibility
   - Ensuring state consistency across modules
   - Implementing proper state update mechanisms

3. **Backward Compatibility**
   - Ensuring existing functionality remains intact
   - Gradual migration approach
   - Thorough testing at each phase

4. **Build Process Updates**
   - TypeScript configuration changes
   - Bundler configuration updates
   - Development workflow adjustments

### 6. Success Metrics

1. **Code Quality**
   - Reduced file sizes (<500 lines per file)
   - Improved code organization
   - Better naming conventions

2. **Development Experience**
   - Faster build times
   - Easier debugging
   - Improved IDE support

3. **Application Performance**
   - Maintained or improved runtime performance
   - Potential for lazy loading
   - Better memory management

This decomposition plan will transform the monolithic codebase into a well-organized, maintainable, and scalable application architecture.