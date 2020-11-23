import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { DraggableTree } from "../../components/Tree/DraggableTree";
import { ListTitle } from "../../components/List/List";
import { Panel } from "../../components/Panel/Panel";
import { TreeNodeType } from "../../types";
import s from "./hierarchymanagementpage.module.scss";
import { clone } from "utils";

const TEST_DATA = [
  {
    title: "Apple - Global BU",
    key: "1",
    children: [
      { title: "Apple - AsiaPAC BU", key: "2" },
      {
        title: "Apple - Europe BU",
        key: "3",
        children: [
          { title: "Apple - node1", key: "5" },
          { title: "Apple - node2", key: "6" },
        ],
      },
      {
        title: "Apple - North America BU",
        key: "4",
        children: [
          {
            title: "Apple - USA",
            key: "7",
            children: [
              { title: "Laredo", key: "8" },
              { title: "Detroit", key: "9" },
              { title: "Columbus", key: "10" },
            ],
          },
        ],
      },
    ],
  },
] as TreeNodeType[];

const findNodeByKey = (
  tree: TreeNodeType[] | undefined,
  key: string
): TreeNodeType | undefined => {
  if (!tree || !key) return undefined;
  var result;
  for (let i = 0; !result && i < tree.length; i++) {
    if (tree[i].key === key) {
      return tree[i];
    } else if (tree[i].children) {
      result = findNodeByKey(tree[i].children!, key);
    }
  }
  return result;
};

export const HierarchyManagementPage = () => {
  const [hierarchy, setHierarchy] = useState(
    undefined as TreeNodeType[] | undefined
  );
  const [hierarchyState, setHierarchyState] = useState(
    undefined as TreeNodeType[] | undefined
  );
  const [selectedNode, setSelectedNode] = useState(
    undefined as string | undefined
  );

  useEffect(() => {
    setHierarchy(clone(TEST_DATA));
    setHierarchyState(clone(TEST_DATA));
  }, []);

  const onReset = () => {
    setHierarchyState(hierarchy ? clone(hierarchy) : undefined);
    setSelectedNode(undefined);
  };

  const onSave = () => {
    console.log(hierarchyState);
  };

  const onSelectItem = (node: any) => {
    if (node) {
      setSelectedNode(node.key);
    } else {
      setSelectedNode(undefined);
    }
  };

  const onItemChangedPosition = (
    droppedNode: TreeNodeType,
    destinationNode: TreeNodeType
  ) => {
    const searchTree = (
      parentNode: TreeNodeType | undefined,
      element: TreeNodeType[],
      key: string
    ): { parent: TreeNodeType | undefined; node: TreeNodeType } | undefined => {
      var result:
        | { parent: TreeNodeType | undefined; node: TreeNodeType }
        | undefined;
      for (let i = 0; !result && i < element.length; i++) {
        if (element[i].key === key) {
          return { parent: parentNode, node: element[i] };
        } else if (element[i].children) {
          result = searchTree(element[i], element[i]!.children!, key);
        }
      }
      return result;
    };

    if (hierarchyState) {
      const newHierarchyState = clone(hierarchyState);

      const searchResult = searchTree(
        undefined,
        newHierarchyState,
        droppedNode.key
      );

      const searchDestinationResult = searchTree(
        undefined,
        newHierarchyState,
        destinationNode.key
      );
      if (searchResult && searchDestinationResult) {
        const { parent, node } = searchResult;

        const { node: destination } = searchDestinationResult;

        if (destination && node) {
          if (!destination.children) {
            destination.children = [];
          }
          destination.children.push(node);
          if (parent) {
            const index = parent.children!.findIndex(
              (child) => child.key === node.key
            );
            if (index >= 0) parent.children!.splice(index, 1);
          }
        }
        setHierarchyState(newHierarchyState);
      }
    }
  };

  const hierarchyPartState = selectedNode ? findNodeByKey(hierarchyState, selectedNode) : undefined

  return (
    <React.Fragment>
      <div className={s.container}>
        <Panel classNames={s.left_tree}>
          <ListTitle title="Company Hierarchy" actions={[]} />
          {hierarchyState && (
            <DraggableTree
              nodes={hierarchyState}
              showTotal={false}
              onItemSelect={onSelectItem}
              onItemChangedPosition={onItemChangedPosition}
            />
          )}
        </Panel>
        <Panel classNames={s.right_tree}>
          <ListTitle title="Canvas" actions={[]} />
          {selectedNode && hierarchyPartState && (
            <DraggableTree
              nodes={[hierarchyPartState]}
              showTotal={false}
              onItemChangedPosition={onItemChangedPosition}
            />
          )}
        </Panel>
      </div>
      <div className={s.buttons_container}>
        <Button title="Reset" type="grey" onClick={onReset} />
        <Button title="Save" type="green" onClick={onSave} />
      </div>
    </React.Fragment>
  );
};
