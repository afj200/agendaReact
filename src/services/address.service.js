import http from "../http-commons";

class AddressDataService {
    getAll() {
      return http.get("/person");
    }

    create(data) {
      return http.post("/person", data);
    }
  
    update(code, data) {
      return http.put(`/person/${code}`, data);
    }
  
    delete(code) {
      return http.delete(`/person/${code}`);
    }
  
    
  }
  
  export default new AddressDataService();