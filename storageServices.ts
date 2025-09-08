/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as db from './dbServices';

// --- TYPES (Copied from index.tsx to avoid circular dependencies) ---
interface UserProfile {
  name: string;
  gender?: string;
  showIntimacyMeter?: boolean;
  showIntimacyProgress?: boolean;
}

interface CharacterProfile {
  basicInfo: {
    name: string;
    username: string;
    bio: string;
    age: number;
    zodiac: string;
    ethnicity: string;
    gender: string;
    race: string;
    cityOfResidence: string;
    aura: string;
    roles: string;
  };
  physicalStyle: {
    bodyType: string;
    hairColor: string;
    hairStyle: string[];
    eyeColor: string;
    skinTone: string;
    breastAndCleavage: string;
    clothingStyle: string[];
    accessories: string;
    makeupStyle: string;
    overallVibe: string;
  };
  personalityContext: {
    personalityTraits: string;
    communicationStyle: string;
    backgroundStory: string;
    fatalFlaw: string;
    secretDesire: string;
    profession: string;
    hobbies: string;
    triggerWords: string;
  };
}

interface Character {
  id: string;
  avatar: string; // base64 image
  avatarPrompt: string;
  characterProfile: CharacterProfile;
  chatHistory: Message[];
  media: Media[];
  timezone: string; // IANA timezone identifier (e.g., "Asia/Tokyo")
  // FIX: Added missing property to match the definition in index.tsx.
  intimacyLevel: number;
  needsRefinement?: boolean;
  characterSheet?: string; // For migration
}


interface Message {
  sender: 'user' | 'ai';
  content: string;
  timestamp: string; // ISO 8601 string
  type?: 'text' | 'voice' | 'image';
  audioDataUrl?: string; // For playback of user voice notes (base64)
  audioDuration?: number;
  imageDataUrl?: string; // For display of user-uploaded images
}

interface Media {
  id:string;
  type: 'image' | 'video';
  data: string | Blob; // base64 for image, Blob for video
  prompt: string;
}


export interface AppState {
    userProfile: UserProfile | null;
    characters: Character[];
}

const APP_STATE_KEY = 'appState';

// --- DB FUNCTIONS ---
// FIX: Add missing saveAppState function.
export async function saveAppState(state: AppState): Promise<void> {
    await db.set(APP_STATE_KEY, state);
}

// FIX: Add missing loadAppState function.
export async function loadAppState(): Promise<AppState | undefined> {
    return db.get<AppState>(APP_STATE_KEY);
}

// --- UTILITY FUNCTIONS ---
export function blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        // FIX: Correct FileReader method is readAsDataURL. The provided file had a syntax error.
        reader.readAsDataURL(blob);
    });
}

// FIX: Add missing base64ToBlob function.
export function base64ToBlob(base64: string, mimeType: string): Blob {
    const base64Data = base64.split(',')[1];
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
}
