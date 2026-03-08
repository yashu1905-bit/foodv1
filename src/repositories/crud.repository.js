function crudRepository(model) {
    return {
        createDocument: async (data) => {
            try {
                const response = await model.create(data);
                return response;
            } catch (error) {
                throw error;
            }
        },

        readDocuments: async () => {
            try {
                const response = await model.find();
                return response;
            } catch (error) {
                throw error;
            }
        },
        readDocument: async (id) => {
            try {
                const response = await model.findById(id);
                return response;
            } catch (error) {
                throw error;
            }
        },
        updateDocument: async (id, data) => {
            try {
                const response = await model.findByIdAndUpdate(id, data);
                return response;
            } catch (error) {
                throw error;
            }
        }
    }
}

module.exports = crudRepository;