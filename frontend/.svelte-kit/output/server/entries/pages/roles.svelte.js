import { c as create_ssr_component, v as validate_component } from "../../_app/immutable/chunks/index-9bb86b63.js";
import { getRoles } from "../endpoints/data.js";
import { E as EditableDatatable } from "../../_app/immutable/chunks/EditableDatatable-ba6f9651.js";
import { G as Grid, R as Row, C as Column, B as Button } from "../../_app/immutable/chunks/autocomplete-8962fbb6.js";
import { T as TextInput } from "../../_app/immutable/chunks/TextInput-ef123c66.js";
import "../../_app/immutable/chunks/Close-2fd03d48.js";
import "../../_app/immutable/chunks/ChevronDown-070f82d5.js";
import "../../_app/immutable/chunks/EditOff-ca7baf5a.js";
const Roles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let roles = [{}];
  let selectedRowIds = [];
  let newRolesFullName;
  let newRolesShortName;
  let columnsToEdit = ["name", "short_name", "is_active"];
  let upData = [];
  async function onUpdate() {
    await fetch("http://localhost:8002/api/roles/bulk_update", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(upData)
    });
    roles = await getRoles();
    upData = [];
    selectedRowIds = [];
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TextInput, "TextInput").$$render(
                  $$result,
                  {
                    placeholder: "new role's full name",
                    value: newRolesFullName
                  },
                  {
                    value: ($$value) => {
                      newRolesFullName = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}
		${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TextInput, "TextInput").$$render(
                  $$result,
                  {
                    placeholder: "new role's short name",
                    value: newRolesShortName
                  },
                  {
                    value: ($$value) => {
                      newRolesShortName = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}

		${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Button, "Button").$$render($$result, { size: "small", kind: "primary" }, {}, {
                  default: () => {
                    return `Submit`;
                  }
                })}`;
              }
            })}`;
          }
        })}
	${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column, "Column").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(EditableDatatable, "EditableDatatable").$$render(
                  $$result,
                  {
                    headers: [
                      { key: "id", value: "ID" },
                      { key: "name", value: "FULL ROLE'S NAME" },
                      {
                        key: "short_name",
                        value: "SHORT ROLE'S NAME"
                      },
                      { key: "is_active", value: "IS ACTIVE" }
                    ],
                    rows: roles,
                    columnsToEdit,
                    onUpdate,
                    selectedRowIds,
                    upData
                  },
                  {
                    selectedRowIds: ($$value) => {
                      selectedRowIds = $$value;
                      $$settled = false;
                    },
                    upData: ($$value) => {
                      upData = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Roles as default
};
