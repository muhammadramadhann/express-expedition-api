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
**API URL**: https://express-expedition-api.vercel.app/expeditions
- #### GET
   `/expeditions` - Retrieve all expeditions.

   `/expeditions/{_id}` - Retrieve a specific expedition by id.

   `/expeditions/track/{trackingNumber}` - Retrieve a specific expedition by tracking number.

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

#### Retrieve all expeditions (GET)
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

#### Retrieve a specific expedition by id or tracking number (GET)
- Endpoint: `/expeditions/{_id}` or `/expeditions/{trackingNumber}`
- Response:

  ```json
  {
    "status": "success",
    "data": {
      "expedition": {
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
        },
        "_id": "649e5e18f22adbe8b47dd540",
        "trackingNumber": "EXW9947772231",
        "deliveryDate": "2023-04-04T00:00:00.000Z",
        "shippingCost": 24000,
        "insurance": true,
        "insertedAt": "2023-06-30T04:46:08.104Z",
        "updatedAt": "2023-06-30T04:46:08.104Z",
        "__v": 0
      }
    }
  }
  ```
  
#### Update a specific expedition by id (PUT)
- Endpoint: `/expeditions/{_id}`
- Request body:

  ```json
  {
    "deliveryDate": "2023-04-04",
    "insurance": false,
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
       "weight": 5
    }
  }
  ```
- Response:

  ```json
  {
    "status": "success",
    "message": "Expedition data successfully updated",
    "data": {
      "id": "649e5e18f22adbe8b47dd540",
      "trackingNumber": "EXW9947772231"
    }
  }
  ```

#### Delete a specific expedition by id or tracking number (DELETE)
- Endpoint: `/expeditions/{_id}`
- Response:

  ```json
  {
    "status": "success",
    "message": "Expedition data successfully deleted"
  }
  ```
