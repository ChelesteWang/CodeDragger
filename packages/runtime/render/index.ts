import "./public-path";
import { FunctionComponent, ComponentClass } from "react";
import { render } from "react-dom";
import { createElement } from "react";
import "./styles.css";

/**
 * @rexjz
 * TODO: - [ ] 支持远程组件（需要一个远程组件统一的下载接口）
 *        problems: 
 *        - 如果预览页使用iframe的方式引入，这意味这远程组件下载接口的重复调用，需要关注一下远程组件的缓存策略，避免重复下载。
 *       - [ ] 布局方式
 *        比较稳妥的方式是和实时预览的部分同构，目前的问题在于如何持久化 ReactGridLayout 的的布局数据传输过来。
 *       - [ ] css 问题，不同的组件库需要引入各自的css 
 */

export interface NodeData {
  id?: "";
  tag: string;
  lib: TagLibType;
  name: string;
  children?: NodeData[];
  plainNode?: boolean;
  value?: number | string;
  attributes: Record<string, unknown>;
}

export enum TagLibType {
  ANTD_MOBILE = "antd-mobile",
  MUI = "mui",
  HTML5 = "html5"
}

type NodeType = string | FunctionComponent<any> | ComponentClass<any, any>;

const e = createElement;
const rootElement = document.getElementById("root");

export async function renderNode(component: NodeData) {
  console.log("render", component);
  let node: NodeType = "";
  if (component.plainNode) {
    return component.value;
  }
  if (component.lib !== TagLibType.HTML5) {
    const lib = await import(component.lib);
    const { [component.tag]: node_t } = lib;
    node = node_t;
  } else {
    node = component.tag;
  }

  if (!component.children || component.children.length === 0) {
    return e(node, component.attributes, null);
  } else {
    const params = [node, component.attributes];
    const componentsRes = await new Promise<NodeData[]>((resolve, reject) => {
      const componentsPromise:
        | Promise<any>[]
        | undefined = component.children?.map<any>((node: NodeData) =>
        renderNode(node)
      );
      if (componentsPromise) {
        Promise.all(componentsPromise).then((res) => {
          resolve(res);
        });
      } else {
        reject();
      }
    });
    Array.prototype.push.apply(params, componentsRes);
    return e.apply({}, params);
  }
}

export function renderComponents(components: NodeData[]) {
  const containerAttributes = {
    style: {
      width: 375,
      height: 750,
      border: "solid #000000 1px",
      display: "flex",
      flexDirection: "column"
    }
  };
  const params: any[] = ["div", containerAttributes];
  Array.prototype.push.apply(
    params,
    components.map(async (node: NodeData) => await renderNode(node))
  );
  console.log("params", e.apply({}, params));
  render(e.apply({}, params), rootElement);
}
