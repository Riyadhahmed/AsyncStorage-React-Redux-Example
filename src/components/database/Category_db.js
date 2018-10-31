import Realm from "realm";

export const CATEGORY_SCHEMA = "CategoryList";
export const CategoryListSchema = {
    name: CATEGORY_SCHEMA,
    primaryKey: "id",
    properties: {
        id: { type: "int", default: 0 },
        category_id: "string",
        category_name: "string",
        createDate: "date"
    }
};

const databaseOptions = {
    path: "CategoryList.realm",
    schema: [CategoryListSchema],
    schemaVersion: 0
};

export const createCategory = categoryItems => new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
        .then(realm => {
            realm.write(() => {
                realm.create(CATEGORY_SCHEMA, categoryItems);
                resolve(categoryItems);
            });
        })
        .catch(err => {
            reject(err);
        });
});

export const selectSingleCategory = categoryID => new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
        .then(realm => {
            let SingleCategory = realm.objects(CATEGORY_SCHEMA).filtered('category_id == $0', categoryID);
            resolve(SingleCategory);
        })
        .catch(err => {
            reject(err);
        });
});


export const selectAllCategory = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
        .then(realm => {
            let results = realm.objects(CATEGORY_SCHEMA);
            let allCategory = Array.from(results)
            resolve(allCategory);
        })
        .catch(err => {
            reject(err);
        });
});


export const deleteCategory = categoryID => new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
        .then(realm => {
            realm.write(() => {
                let categoryItem = realm.objectForPrimaryKey(CATEGORY_SCHEMA, categoryID)
                realm.delete(categoryItem);
                resolve();
            });
        })
        .catch(err => {
            reject(err);
        });
});

export default new Realm(databaseOptions);

