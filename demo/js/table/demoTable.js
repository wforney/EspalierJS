import espalier from "../../../src/js/espalier";
import rowTemplate from "./templates/row";
import pagerTemplate from "./templates/pager";

let data = [
    {
        "col1": "Record 1-1",
        "col2": "Record 1-2"
    },
    {
        "col1": "Record 2-1",
        "col2": "Record 2-2"
    },
    {
        "col1": "Record 3-1",
        "col2": "Record 3-2"
    },
    {
        "col1": "Record 4-1",
        "col2": "Record 4-2"
    },
    {
        "col1": "Record 5-1",
        "col2": "Record 5-2"
    },
    {
        "col1": "Record 6-1",
        "col2": "Record 6-2"
    },
    {
        "col1": "Record 7-1",
        "col2": "Record 7-2"
    },
    {
        "col1": "Record 8-1",
        "col2": "Record 8-2"
    },
    {
        "col1": "Record 9-1",
        "col2": "Record 9-2"
    },
    {
        "col1": "Record 10-1",
        "col2": "Record 10-2"
    },
    {
        "col1": "Record 11-1",
        "col2": "Record 11-2"
    },
    {
        "col1": "Record 12-1",
        "col2": "Record 12-2"
    },
    {
        "col1": "Record 13-1",
        "col2": "Record 13-2"
    },
    {
        "col1": "Record 14-1",
        "col2": "Record 14-2"
    },
    {
        "col1": "Record 15-1",
        "col2": "Record 15-2"
    },
    {
        "col1": "Record 16-1",
        "col2": "Record 16-2"
    },
    {
        "col1": "Record 17-1",
        "col2": "Record 17-2"
    },
    {
        "col1": "Record 18-1",
        "col2": "Record 18-2"
    },
    {
        "col1": "Record 19-1",
        "col2": "Record 19-2"
    },
    {
        "col1": "Record 20-1",
        "col2": "Record 20-2"
    },
    {
        "col1": "Record 21-1",
        "col2": "Record 21-2"
    },
    {
        "col1": "Record 22-1",
        "col2": "Record 22-2"
    },
    {
        "col1": "Record 23-1",
        "col2": "Record 23-2"
    },
    {
        "col1": "Record 24-1",
        "col2": "Record 24-2"
    },
    {
        "col1": "Record 25-1",
        "col2": "Record 25-2"
    }
];

export default (container) => {
    let repeater = container.repeater({
        src: new espalier.repeater.StaticSource(data),
        itemTemplate: rowTemplate,
        pageSize: 5,
        rendered: pageInfo => {
            let startAtPage = Math.max(1, pageInfo.page - 3);
            let endAtPage = Math.min(pageInfo.pages, pageInfo.page + 3 + Math.max(3 - pageInfo.page, 1));
            let nextPage = (pageInfo.page + 1);

            let pages = [{ disabled: pageInfo.page === 1, active: false, text: "<", page: pageInfo.page - 1 }];

            for (let i = startAtPage; i <= endAtPage; i++) {
                pages.push({ disabled: false, active: i === pageInfo.page, text: i.toString(), page: i });
            }

            pages.push({ disabled: nextPage === pageInfo.pages + 1, active: false, text: ">", page: nextPage });
            let renderedPager = pagerTemplate(pages);
            espalier.node("tfoot", container).html(renderedPager);
        }
    });

    //     let repeater = container.repeater({
    //         src: new espalier.repeater.AJAXSource({ url: "http://localhost:63398/Users/Search" }),
    //         itemTemplate: rowTemplate,
    //         pageSize: 3,
    //         rendered: pageInfo => {
    //             let startAtPage = Math.max(1, pageInfo.page - 3);
    //             let endAtPage = Math.min(pageInfo.pages, pageInfo.page + 3 + Math.max(3 - pageInfo.page, 1));
    //             let nextPage = (pageInfo.page + 1);
    // 
    //             let pages = [{ disabled: pageInfo.page === 1, active: false, text: "<", page: pageInfo.page - 1 }];
    // 
    //             for (let i = startAtPage; i <= endAtPage; i++) {
    //                 pages.push({ disabled: false, active: i === pageInfo.page, text: i.toString(), page: i });
    //             }
    // 
    //             pages.push({ disabled: nextPage === pageInfo.pages + 1, active: false, text: ">", page: nextPage });
    //             let renderedPager = pagerTemplate(pages);
    //             espalier.node("tfoot", container).html(renderedPager);
    //         }
    //     });

    return repeater;
}