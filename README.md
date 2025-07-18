# README

## Opis projektu

Projekt składa się z dwóch głównych części: backendu (`task_t4it_backend`) oraz frontendowej aplikacji (`task_t4it_frontend`).

### Backend (`task_t4it_backend`)
- **users-service** – mikroserwis odpowiedzialny za zarządzanie użytkownikami (dodawanie, pobieranie). Utworzenie usera wysyła event 'user.created' przez Kafka
- **task-api-gateway** – API Gateway, który pośredniczy w komunikacji między frontendem a mikroserwisami.
- **notification-service** – serwis logujący powiadomienia o utworzeniu nowego użytkownika. 
- Serwisy są dockerowane i uruchamiane przez `docker-compose.yml`.

### Frontend (`task_t4it_frontend`)
- Prosta aplikacja w Next.js.
- Strona główna zawiera formularz (imię, email).
- Po wysłaniu formularza dane trafiają do backendu (`POST /users`).
- Przycisk `Get Users` pokazuje wszystkich dodanych userów.

## Jak uruchomić?

1. **Backend**  
   Przejdź do katalogu `task_t4it_backend` i uruchom:
   ```sh
   docker-compose up --build
   ```
   Spowoduje to uruchomienie wszystkich mikroserwisów w osobnych kontenerach.

   Uruchomienie zajmuje ok 1:30 min, czekaj na coś takiego:

   ```sh
   notification-service-1  | [Nest] 1  - 07/18/2025, 12:25:16 AM     LOG [NestMicroservice] Nest microservice successfully started +3ms
   users-service-1         | [Nest] 1  - 07/18/2025, 12:25:16 AM     LOG [NestMicroservice] Nest microservice successfully started +17ms
   ```

3. **Frontend**  
   Przejdź do katalogu `task_t4it_frontend` i uruchom:
   ```sh
   npm install
   npm run dev
   ```
   Aplikacja frontendowa będzie dostępna pod `http://localhost:3003`.
