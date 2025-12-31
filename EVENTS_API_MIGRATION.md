# Events API Migration

## Overview
The events page has been migrated from using a static JSON file (`events-temp.json`) to fetching data from the backend API.

## Changes Made

### 1. Created Event Service (`services/eventService.ts`)
- Handles all API calls related to events
- Provides methods for:
  - `getAllEvents()` - Fetch all events
  - `getEventById(id)` - Fetch single event
  - `getEventsByClub(club)` - Fetch events by organizing club

### 2. Created Event Transformer (`utils/eventTransformer.ts`)
- Transforms backend event data to frontend format
- Maps backend event types to frontend categories
- Handles day number to label conversion
- Generates placeholder images and Japanese titles

### 3. Updated Events Page (`app/events/page.tsx`)
- Removed dependency on static JSON file
- Added loading and error states
- Implemented real-time data fetching from backend
- Added retry functionality for failed requests

### 4. Created Loading Component (`components/LoadingSpinner.tsx`)
- Reusable loading spinner component
- Consistent styling with the app theme

## API Endpoints Used
- `GET /api/events/getEvents` - Fetch all events

## Backend Event Model
The backend uses the following event structure:
```typescript
{
  _id: string;
  orgId: string;
  day: number;
  eventName: string;
  eventDescription: string;
  posterUrl?: string;
  venue: string;
  organiser: string;
  startTime: string;
  endTime: string;
  eventType: string;
  participants: string[];
}
```

## Frontend Event Model
The frontend expects this structure:
```typescript
{
  id: string;
  title: string;
  category: string;
  day: string;
  time: string;
  venue: string;
  organizingClub: string;
  description: string;
  // ... other fields
}
```

## Next Steps
1. Start your backend server on port 8001
2. Ensure the backend has event data in the database
3. Test the events page to verify data is loading correctly

## Troubleshooting
- If events don't load, check that the backend is running on port 8001
- Verify CORS is properly configured in the backend
- Check browser console for any API errors