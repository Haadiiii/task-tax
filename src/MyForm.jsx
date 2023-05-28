import React, { useState } from "react";
import { useFormik } from "formik";
import { FaCheck, FaRegCheckSquare } from "react-icons/fa";

const MyForm = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectAllItems, setSelectAllItems] = useState(false);
  const [selectSomeItems, setSelectSomeItems] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedUncategorized, setSelectedUncategorized] = useState(false);

  const apiResponse = [
    {
      id: 14864,
      tab_id: 3202,
      name: "Recurring Item",
      amount: 12.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.305Z",
      updated_at: "2018-06-17T19:19:42.304Z",
      type: "TabItem",
      position: 1,
      anchor: null,
      parent_id: null,
      catalog_object_id: null,
      description: null,
      available_quantity: null,
      hidden: false,
      options: {
        recurring: {
          enabled: true,
          options: {
            ends: { type: "never" },
            start: { type: "first_payment" },
            repeatInterval: "P1M",
          },
        },
      },
      tsv: "'item':2 'recur':1",
      quantity_sold: 2,
      amount_sold: 24.0,
      total_buyers: 1,
      quantity_refunded: 0,
      amount_discounted: 0.0,
      amount_refunded: 0.0,
      net_amount: 24.0,
      net_quantity: 2,
      subcategory: null,
      images: [],
    },
    {
      id: 14865,
      tab_id: 3202,
      name: "Jasinthe Bracelet",
      amount: 26.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.309Z",
      updated_at: "2018-08-11T03:08:39.841Z",
      type: "TabItem",
      position: 1,
      anchor: null,
      parent_id: 14866,
      catalog_object_id: 8463,
      description: null,
      available_quantity: 8,
      hidden: false,
      options: { makeAvailableQuantityPublic: false },
      tsv: "'bracelet':2 'jasinth':1",
      quantity_sold: 11,
      amount_sold: 286.0,
      total_buyers: 7,
      quantity_refunded: 0,
      amount_discounted: 0.0,
      amount_refunded: 0.0,
      net_amount: 286.0,
      net_quantity: 11,
      subcategory: null,
      category: { id: 14866, name: "Bracelets", options: {} },
      images: [
        {
          id: 5572,
          upload_path: "uploads/image/image_file/716/jasinthe_bracelet.jpg",
          metadata: {},
          url: "https://images.cheddarcdn.com/eyJidWNrZXQiOiJjaGVkZGFyLXVwLXJldmlldyIsImtleSI6InVwbG9hZHMvaW1hZ2UvaW1hZ2VfZmlsZS83MTYvamFzaW50aGVfYnJhY2VsZXQuanBnIiwib3V0cHV0Rm9ybWF0IjoianBlZyIsImVkaXRzIjp7ImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1fX19fQ==",
        },
      ],
    },
    {
      id: 14867,
      tab_id: 3202,
      name: "Jasinthe Bracelet",
      amount: 26.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.317Z",
      updated_at: "2018-07-10T13:24:53.733Z",
      type: "TabItem",
      position: 2,
      anchor: null,
      parent_id: 14866,
      catalog_object_id: 8463,
      description: null,
      available_quantity: 19,
      hidden: false,
      options: { makeAvailableQuantityPublic: true },
      tsv: "'bracelet':2 'jasinth':1",
      quantity_sold: 1,
      amount_sold: 26.0,
      total_buyers: 1,
      quantity_refunded: 0,
      amount_discounted: 5.2,
      amount_refunded: 0.0,
      net_amount: 20.8,
      net_quantity: 1,
      subcategory: null,
      category: { id: 14866, name: "Bracelets", options: {} },
      images: [
        {
          id: 5571,
          upload_path: "uploads/image/image_file/1742/jasinthe_bracelet.jpg",
          metadata: {},
          url: "https://images.cheddarcdn.com/eyJidWNrZXQiOiJjaGVkZGFyLXVwLXJldmlldyIsImtleSI6InVwbG9hZHMvaW1hZ2UvaW1hZ2VfZmlsZS8xNzQyL2phc2ludGhlX2JyYWNlbGV0LmpwZyIsIm91dHB1dEZvcm1hdCI6ImpwZWciLCJlZGl0cyI6eyJmbGF0dGVuIjp7ImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NX19fX0=",
        },
      ],
    },
    {
      id: 14868,
      tab_id: 3202,
      name: "Recurring Item with questions",
      amount: 12.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.323Z",
      updated_at: "2018-07-02T14:10:25.296Z",
      type: "TabItem",
      position: 2,
      anchor: null,
      parent_id: null,
      catalog_object_id: null,
      description: null,
      available_quantity: null,
      hidden: false,
      options: {
        recurring: {
          enabled: true,
          options: {
            ends: { type: "payment_count", payment_count: 5 },
            start: { type: "first_payment" },
            repeatInterval: "P1M",
          },
        },
        makeAvailableQuantityPublic: false,
      },
      tsv: "'item':2 'question':4 'recur':1",
      quantity_sold: 0,
      amount_sold: 0.0,
      total_buyers: 0,
      quantity_refunded: 0,
      amount_discounted: 0.0,
      amount_refunded: 0.0,
      net_amount: 0.0,
      net_quantity: 0,
      subcategory: null,
      images: [],
    },
    {
      id: 14869,
      tab_id: 3202,
      name: "Zero amount item with questions",
      amount: 0.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.334Z",
      updated_at: "2018-07-02T14:09:09.267Z",
      type: "TabItem",
      position: 3,
      anchor: null,
      parent_id: null,
      catalog_object_id: null,
      description: null,
      available_quantity: null,
      hidden: false,
      options: { makeAvailableQuantityPublic: false },
      tsv: "'amount':2 'item':3 'question':5 'zero':1",
      quantity_sold: 2,
      amount_sold: 0.0,
      total_buyers: 2,
      quantity_refunded: 0,
      amount_discounted: 0.0,
      amount_refunded: 0.0,
      net_amount: 0.0,
      net_quantity: 2,
      subcategory: null,
      images: [],
    },
    {
      id: 14870,
      tab_id: 3202,
      name: "Inspire Bracelet",
      amount: 32.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.348Z",
      updated_at: "2018-06-27T16:47:21.731Z",
      type: "TabItem",
      position: 3,
      anchor: null,
      parent_id: 14866,
      catalog_object_id: 8462,
      description: null,
      available_quantity: 0,
      hidden: false,
      options: {},
      tsv: "'bracelet':2 'inspir':1",
      quantity_sold: 0,
      amount_sold: 0.0,
      total_buyers: 0,
      quantity_refunded: 0,
      amount_discounted: 0.0,
      amount_refunded: 0.0,
      net_amount: 0.0,
      net_quantity: 0,
      subcategory: null,
      category: { id: 14866, name: "Bracelets", options: {} },
      images: [
        {
          id: 5570,
          upload_path: "uploads/image/image_file/715/inspire_bracelet.jpg",
          metadata: {},
          url: "https://images.cheddarcdn.com/eyJidWNrZXQiOiJjaGVkZGFyLXVwLXJldmlldyIsImtleSI6InVwbG9hZHMvaW1hZ2UvaW1hZ2VfZmlsZS83MTUvaW5zcGlyZV9icmFjZWxldC5qcGciLCJvdXRwdXRGb3JtYXQiOiJqcGVnIiwiZWRpdHMiOnsiZmxhdHRlbiI6eyJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTV9fX19",
        },
      ],
    },
    {
      id: 14872,
      tab_id: 3202,
      name: "Normal item with questions",
      amount: 55.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.365Z",
      updated_at: "2018-07-02T14:09:46.143Z",
      type: "TabItem",
      position: 4,
      anchor: null,
      parent_id: null,
      catalog_object_id: null,
      description: null,
      available_quantity: null,
      hidden: false,
      options: { makeAvailableQuantityPublic: false },
      tsv: "'item':2 'normal':1 'question':4",
      quantity_sold: 2,
      amount_sold: 110.0,
      total_buyers: 2,
      quantity_refunded: 0,
      amount_discounted: 22.0,
      amount_refunded: 0.0,
      net_amount: 88.0,
      net_quantity: 2,
      subcategory: null,
      images: [],
    },
    {
      id: 14873,
      tab_id: 3202,
      name: "normal item ",
      amount: 20.0,
      amount_type: "fixed",
      allow_quantity: null,
      deleted_at: null,
      required: false,
      created_at: "2018-07-02T14:11:00.378Z",
      updated_at: "2018-06-21T15:38:07.112Z",
      type: "TabItem",
      position: 5,
      anchor: null,
      parent_id: null,
      catalog_object_id: null,
      description: null,
      available_quantity: null,
      hidden: false,
      options: {},
      tsv: "'item':2 'normal':1",
      quantity_sold: 1,
      amount_sold: 20.0,
      total_buyers: 1,
      quantity_refunded: 0,
      amount_discounted: 4.0,
      amount_refunded: 0.0,
      net_amount: 16.0,
      net_quantity: 1,
      subcategory: null,
      images: [],
    },
  ];
  const categoryItems = apiResponse.filter((item) => item.category);
  const handleCategoryCheckboxChange = () => {
    const categoryItems = apiResponse.filter((item) => item.category);
    const allItemsSelected = categoryItems.every(
      (item) => formik.values.items[item.id]
    );
    if (allItemsSelected) {
      setSelectedCategories(false);
      categoryItems.forEach((item) => {
        formik.setFieldValue(`items.${item.id}`, false);
      });
    } else {
      setSelectedCategories(true);
      categoryItems.forEach((item) => {
        formik.setFieldValue(`items.${item.id}`, true);
      });
    }
  };

  const uncategorizedItems = apiResponse.filter((item) => !item.category);
  const handleUncategorizedCheckboxChange = () => {
    const uncategorizedItems = apiResponse.filter((item) => !item.category);
    const allItemsSelected = uncategorizedItems.every(
      (item) => formik.values.items[item.id]
    );
    if (allItemsSelected) {
      setSelectedUncategorized(false);
      uncategorizedItems.forEach((item) => {
        formik.setFieldValue(`items.${item.id}`, false);
      });
    } else {
      setSelectedUncategorized(true);
      uncategorizedItems.forEach((item) => {
        formik.setFieldValue(`items.${item.id}`, true);
      });
    }
  };

  const handleItemCheckboxChange = (itemId) => {
    formik.setFieldValue(`items.${itemId}`, !formik.values.items[itemId]);
  };

  const handleApplyToItems = (appliedTo) => {
    const selectedItemsIds = selectedItems.map((item) => item.id);
    console.log("Selected Items:", selectedItemsIds);
    console.log("Applied To:", appliedTo);
  };

  const handleSelectAllItems = () => {
    const allItems = apiResponse.filter(
      (item) => item.category || !item.category
    );
    if (selectAllItems) {
      setSelectedItems([]);
      allItems.forEach((item) => {
        formik.setFieldValue(`items.${item.id}`, false);
      });
    } else {
      setSelectedItems(allItems);
      allItems.forEach((item) => {
        formik.setFieldValue(`items.${item.id}`, true);
      });
    }
    setSelectAllItems(!selectAllItems);
  };

  const handleSelectSomeItems = () => {
    setSelectSomeItems(!selectSomeItems);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      categories: {},
      items: {},
      taxRate: 0,
      taxName: "",
      appliedTo: "",
    },
    onSubmit: () => {
      console.log(formik.values);
    },
  });

  const totalItemSelected = Object.values(formik.values.items).filter(
    Boolean
  ).length;

  const { values } = formik;
  const { categories, items, taxRate, taxName, appliedTo } = values;

  // Group items by category
  const groupedItems = {};
  apiResponse.forEach((item) => {
    const categoryId = item.category ? item.category.id : "uncategorized";
    if (!groupedItems[categoryId]) {
      groupedItems[categoryId] = {
        category: item.category,
        items: [],
      };
    }
    groupedItems[categoryId].items.push(item);
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col items-start justify-center text-gray-800">
        <h2 className="text-2xl font-bold text-zinc-500 mb-8">Add Tax</h2>
        <div className="flex gap-2 mb-10">
          <div>
            <input
              className="border border-gray-300 px-4 py-2 w-[500px]"
              id="taxName"
              name="taxName"
              type="text"
              value={taxName}
              onChange={formik.handleChange}
            />
          </div>
          <div>
            <input
              className="border border-gray-300 px-1 py-2 w-3/4"
              placeholder="%"
              id="taxRate"
              name="taxRate"
              type="number"
              step="0.01"
              value={taxRate}
              onChange={formik.handleChange}
            />
          </div>
        </div>
      </div>
      <div>
        <select
          className="
        border border-gray-300 px-4 py-2 w-[200px] bg-slate-100 mb-10 text-gray-600"
          id="appliedTo"
          name="appliedTo"
          value={appliedTo}
          onChange={formik.handleChange}
        >
          <option value="">Select an option</option>
          <option value="all">All Items</option>
          <option value="some">Selected Items</option>
        </select>

        <div className="flex flex-col rounded-full justify-center">
          <div className="flex items-center gap-2 mb-8">
            <input
              className="accent-orange-400 w-8  me-6 h-6 rounded-full"
              type="checkbox"
              name="selectAllItems"
              checked={selectAllItems}
              onChange={handleSelectAllItems}
            />
            <label className="text-gray-500 text-lg" htmlFor="appliedTo">
              Apply to all items in collection
            </label>
          </div>
          <div>
            <input
              className="accent-orange-400 w-8  me-8 h-6 rounded-full"
              type="checkbox"
              name="selectSomeItems"
              checked={selectSomeItems}
              onChange={handleSelectSomeItems}
            />
            <label className="text-gray-500 text-lg" htmlFor="appliedTo">
              Apply to specific items
            </label>
          </div>
        </div>
      </div>
      <hr
        className="
      border border-gray-300 my-10
      "/>
      <input
        className="border border-gray-300 px-4 py-1 w-[250px] mb-5"
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <div
        className="flex gap-4 bg-gray-200 p-3"
      >
        <input
            className="accent-sky-600 rounded-full"
          type="checkbox"
          name="categories"
          id="categories"
          checked={selectedCategories}
          onChange={handleCategoryCheckboxChange}
        />
        <h3
        className="text-gray-600"
        >Bracelets</h3>
      </div>
      {categoryItems?.map((category) => (
        <div
        className="flex ml-8 mt-3 gap-3"
         key={category.id}>
          <input
          className="accent-sky-600 rounded-full"
            type="checkbox"
            name={`categories.${category.id}`}
            id={`categories.${category.id}`}
            checked={formik.values.items[category.id]}
            onChange={() => handleItemCheckboxChange(category.id)}
          />
          <label
            className="text-gray-600"
          >{category.name}</label>
        </div>
      ))}
      <div
        className="flex gap-4 bg-gray-200 p-3 mt-2"
        >
        <input
         className="accent-sky-600 rounded-full"
          type="checkbox"
          name="uncategorized"
          id="uncategorized"
          checked={selectedUncategorized}
          onChange={handleUncategorizedCheckboxChange}
        />
      </div>
      {uncategorizedItems?.map((item) => (
        <div
        className="flex ml-8 mt-3 gap-3 "
         key={item.id}>
          <input
            className="accent-sky-600 rounded-full"
            type="checkbox"
            id={`items.${item.id}`}
            name={`items.${item.id}`}
            checked={formik.values.items[item.id]}
            onChange={() => handleItemCheckboxChange(item.id)}
          />
          <label
          className="text-gray-600"
          >{item.name}</label>
        </div>
      ))}

      <hr
        className="border border-gray-300 my-10"
       />
      <div
      className="flex justify-end"
      >

      <button
        className="bg-orange-500 text-white px-7 py-3 mt-1"
       type="submit">Add Tax to {totalItemSelected} item(s)</button>
             </div>

    </form>
  );
};

export default MyForm;
