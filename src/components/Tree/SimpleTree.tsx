import React from "react";
import Tree, { TreeNode } from "rc-tree";
import { TreeNodeType } from "../../types";
import "./rc-tree.scss";
import s from "./simpletree.module.scss";

interface Props {
  nodes: TreeNodeType[];
  showTotal: boolean;
}

export const SimpleTree = ({ nodes, showTotal }: Props) => {
  const calculateTotal = (nodes: TreeNodeType[]) => {
    let total = nodes.length;
    nodes.forEach((node) => {
      if (node.children) total += calculateTotal(node.children);
    });
    return total;
  };

  const getTitleWithCount = (title: string, count: number) => (
    <div className={s.custom_title}>
      <p>{title}</p>
      <p>{count}</p>
    </div>
  );

  const getNode = (node: TreeNodeType) => (
    <TreeNode
      title={
        node.children && node.children.length > 0
          ? getTitleWithCount(node.title, node.children.length)
          : node.title
      }
      key={node.key}
    >
      {node.children && node.children.map((child) => getNode(child))}
    </TreeNode>
  );

  return (
    <div>
      {showTotal && (
        <div className={s.list_total}>
          <p className={s.list_total_title}>Total</p>
          <p className={s.list_total_value}>{calculateTotal(nodes)}</p>
        </div>
      )}
      <Tree defaultExpandAll={true} selectable={false}>
        {nodes.map((node) => getNode(node))}
      </Tree>
    </div>
  );
};
