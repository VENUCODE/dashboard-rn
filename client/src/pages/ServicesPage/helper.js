const categorizeServices = (services) => {
  return services.reduce((acc, service) => {
    const categoryName = service.categoryName.toLowerCase();
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(service);
    return acc;
  }, {});
};
export default categorizeServices;
