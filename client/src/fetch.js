export const hostUri = "http://localhost:3300";
// export const hostUri = "https://dashboard-react-nodejs-mongodb.onrender.com";
// export const hostUri = "https://rightneed.azurewebsites.net";

export const endpoints = {
  loginUser: "/api/user/login",
  //agent endpoints
  getAllAgents: "/api/agents/verified-agents",
  getRequestedAgents: "/api/agents/agent-requests",
  addAgent: "/api/agents/add-agent",
  getAgentOccupations: "/api/agents/occupation",
  updateAgentStatus: "/api/agents/update-status",
  //requested agents
  verifyAgent: "/api/agents/verify-agent",
  getAllJobs: "/api/jobs/get-posts",
  //manager endpoints
  getAllManagers: "/api/managers/all",
  addManager: "/api/managers/add-manager",
  addJobPost: "/api/jobs/add-post",
  updateJobStatus: "/api/jobs/update-status",
  getJobCategories: "/api/jobs/categories",
  deleteJobPost: "/api/jobs/delete-job",
  //services endpoints
  getAllServices: "/api/services/all",
  getServiceCategories: "/api/services/categories",
  addServiceCategory: "/api/services/add-category",
  addService: "/api/services/add-service",
  deleteService: "/api/services/delete-service",
  //properties endpoints
  getAllProperties: "/api/properties/verified",
  getUnverifiedProperties: "/api/properties/unverified",
  getRejectedProperties: "/api/properties/rejected",
  verifyProperty: "/api/properties/verify",
  rejectProperty: "/api/properties/reject",
  addProperty: "/api/properties/add",
  deleteProperty: "/api/properties/delete",
  //Product endpoints
  getAllProducts: "/api/products/all",
  getProductCategories: "/api/products/categories",
  addProductCategory: "/api/products/add-category",
  addProduct: "/api/products/add-product",
  deleteProduct: "/api/products/delete-product",
  //Supplier endpoints
  getAllSuppliers: "/api/suppliers/all",
  getSupplierAddons: "/api/suppliers/supplier-addons",
  //file upload route
  uploadFile: "/api/bulk/upload",
};
