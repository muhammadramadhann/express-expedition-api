## <div align="center">Verification System in Student Attendance Case Study</div>

The Expedition API provides a RESTful web service to get information about expeditions or shipping data from a fake shipping company called Express Ways. The operations used in this API start from processing CRUD (Create Read Update Delete) and searching data using a receipt number or tracking number.

## How to Run Project
1. Create a new directory to save the project
2. Open the directory and start the terminal (bash/cmd/shell/etc...)
3. Clone the repository to your local

   ```bash
   $ git clone https://github.com/muhammadramadhann/express-expedition-api.git
   ```

4. Install the required dependencies using npm or yarn and wait untill finish

    ```bash
    $ npm install
    ```

   or

   ```bash
   $ yarn install
   ```

5. Start the server

    ```bash
    $ npm start
    ```

   or

   ```bash
   $ yarn start
   ```
<br/>

## Basic Usage (Endpoint API)
### Request Guide
- #### GET
   `/expeditions` - Retrieves all expeditions.

   `/expeditions/{_id}` - Retrieves a specific expedition by id.

   `/expeditions/track/{trackingNumber}` - Retrieves a specific expedition by tracking number.

- #### POST
   `/expeditions` - Save a new expedition.

- #### PUT
   `/expeditions/{_id}` - Update a specific expedition by id.

- #### DELETE
   `/expeditions/{_id}` - Delete a specific expedition by id.

### Example
#### Save a new expedition (POST)
- Endpoint: `/expeditions`
- Request body:

  ```json
  {
       "deliveryDate": "2023-04-04",
       "insurance": true,
       "sender": {
           "name": "Sukanta",
           "address": "Bandung",
           "phoneNumber": "0813632872110",
           "note": "Kicimpring Family"
       },
       "recipient": {
           "name": "Andi Budiman",
           "address": "Jakarta",
           "phoneNumber": "082163901024"
       },
       "item": {
           "name": "Kicimpring Family: Oleh-Oleh Khas Bandung",
           "weight": 3
       }
  }
  ```

- Response:

  ```json
  {
       "status": "success",
       "message": "Expedition data successfully saved",
       "data": {
           "id": "649e5e18f22adbe8b47dd540",
           "trackingNumber": "EXW9947772231"
       }
   }
  ```

#### Retrieves all expeditions (GET)
- Endpoint: `/expeditions`
- Response:

  ```json
  {
       "status": "success",
       "data": {
           "expeditions": [
               {
                   "id": "642b929eccc5da42ac3475b2",
                   "trackingNumber": "EXW0943648340",
                   "deliveryDate": "2023-04-05T00:00:00.000Z",
                   "shippingCost": 16000,
                   "insurance": true,
                   "item": {
                       "name": "Mukenah dan boneka",
                       "weight": 2
                   }
               },
               {
                   "id": "649e5e18f22adbe8b47dd540",
                   "trackingNumber": "EXW9947772231",
                   "deliveryDate": "2023-04-04T00:00:00.000Z",
                   "shippingCost": 24000,
                   "insurance": true,
                   "item": {
                       "name": "Kicimpring Family: Oleh-Oleh Khas Bandung",
                       "weight": 3
                   }
               }
           ]
       }
   }
  ```
