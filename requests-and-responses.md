# REQUESTS AND REPONSES

This `.md` file was created to help users interact with my backend. It provides clear instructions on how to make requests to the API, as well as details on how the responses will be returned. Whether you're testing endpoints or integrating with the backend, this guide will help you understand the expected request formats and the structure of the responses.<br>
Peace 🖖🏽 Arthur Pfeilsticker - First Deploy: 02/12/2024

## Get list of all mentors

### Request LINK

https://soul-backend.vercel.app/mentors

### Response JSON format  (list of Mentors) | Status: 200 OK
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "totalMentoringMinutes": 0,
    "level": 3,
    "experience": 5,
    "isLeader": false
  },
  {
    "id": 2,
    "name": "Camille",
    "totalMentoringMinutes": 0,
    "level": 30,
    "experience": 5,
    "isLeader": false
  },
  {
    "id": 3,
    "name": "Arthur",
    "totalMentoringMinutes": 0,
    "level": 1,
    "experience": 0,
    "isLeader": false
  }
]
```
## GET ONE mentor by his ID

### Request LINK

https://soul-backend.vercel.app/mentors/id    (id is an integer number - currently only has 1, 2 and 3 ids)

### Response JSON format | Status: 200 OK
```json
{
  "id": 1,
  "name": "John Doe",
  "totalMentoringMinutes": 0,
  "level": 3,
  "experience": 5,
  "isLeader": false
}
```
## Get list of all mentees

### Request LINK

https://soul-backend.vercel.app/mentees

### Response JSON format (list of Mentees) | Status: 200 OK
```json
[
  {
    "id": 2,
    "name": "Jane Smith",
    "mentoringSessionsAttended": 0,
    "currentMentor": {
      "id": 1,
      "name": "John Doe",
      "totalMentoringMinutes": 0,
      "level": 3,
      "experience": 5,
      "isLeader": false
    }
  },
  {
    "id": 4,
    "name": "Carol",
    "mentoringSessionsAttended": 0,
    "currentMentor": {
      "id": 3,
      "name": "Arthur",
      "totalMentoringMinutes": 0,
      "level": 1,
      "experience": 0,
      "isLeader": false
    }
  },
  {
    "id": 5,
    "name": "Danis",
    "mentoringSessionsAttended": 0,
    "currentMentor": {
      "id": 3,
      "name": "Arthur",
      "totalMentoringMinutes": 0,
      "level": 1,
      "experience": 0,
      "isLeader": false
    }
  }
]
```
## GET ONE mentee by his ID

### Request LINK

https://soul-backend.vercel.app/mentees/id    (id is an integer number - currently only has 2, 4 and 5 ids)

### Response JSON format | Status: 200 OK
```json
{
  "id": 2,
  "name": "Jane Smith",
  "mentoringSessionsAttended": 0,
  "currentMentor": {
    "id": 1,
    "name": "John Doe",
    "totalMentoringMinutes": 0,
    "level": 3,
    "experience": 5,
    "isLeader": false
  }
}
```
## POST mentor  (create mentor)

### Request Link https://soul-backend.vercel.app/mentors

### Request Body JSON
```json
{
  "name": "Arthur"
}
```
### Response JSON example | Status: 200 OK
```json
{
  "id": 3,
  "name": "Arthur",
  "totalMentoringMinutes": 0,
  "level": 1,
  "experience": 0,
  "isLeader": false
}
```
## POST mentee  (create mentee)

### Request Link https://soul-backend.vercel.app/mentees

### Request Body JSON
```json
{
  "name": "Ruan",
  "currentMentorId": 2
}
```
### Response JSON example | Status: 200 OK
```json
{
  "name": "Ruan",
  "currentMentor": {
    "id": 2,
    "name": "Camille",
    "totalMentoringMinutes": 0,
    "level": 30,
    "experience": 5,
    "isLeader": false
  },
  "id": 8,
  "mentoringSessionsAttended": 0
}
```
## POST mentoring-session (create mentoring session)

### Request Link

### Request Body JSON
```json
{
  "date": "2024-12-05T10:00:00Z",
  "sessionNumber": 2,
  "status": "Done",
  "durationMinutes": 90,
  "mentorRating": 4,
  "practicedSkills": ["Speaking", "Listening"],
  "topics": "Conversation practice",
  "mentor": {
    "id": 2,
    "name": "Camille",
    "totalMentoringMinutes": 0,
    "level": 30,
    "experience": 5,
    "isLeader": false
  },
  "mentee": {
    "name": "Danis",
    "currentMentor": {
      "id": 3,
      "name": "Arthur",
      "totalMentoringMinutes": 0,
      "level": 1,
      "experience": 0,
      "isLeader": false
    },
    "id": 5,
    "mentoringSessionsAttended": 0
  }
}
```
### Response JSON example | Status: 200 OK
```json
{
  "date": "2024-12-05T10:00:00Z",
  "sessionNumber": 2,
  "status": "Done",
  "durationMinutes": 90,
  "mentorRating": 4,
  "practicedSkills": [
    "Speaking",
    "Listening"
  ],
  "topics": "Conversation practice",
  "mentor": {
    "id": 2,
    "name": "Camille",
    "totalMentoringMinutes": 0,
    "level": 30,
    "experience": 5,
    "isLeader": false
  },
  "mentee": {
    "id": 8,
    "name": "Ruan",
    "mentoringSessionsAttended": 0
  },
  "cancellationReason": null,
  "rescheduleReason": null,
  "id": 2
}
```
