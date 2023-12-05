import React from "react";
import { TreeView, TreeItem } from '@mui/x-tree-view';


import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FolderIcon from "@mui/icons-material/Folder";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {  makeStyles } from '@material-ui/core';



// const useTreeItemStyles = makeStyles((theme) => ({
//   content: {
//     // flexDirection: "row-reverse"
//   },
//   labelRoot: {
//     display: "flex",
//     alignItems: "center",
//     padding: theme.spacing(0.5, 0)
//   },
//   labelIcon: {
//     marginRight: theme.spacing(1)
//   },
//   labelText: {
//     fontWeight: "inherit",
//     flexGrow: 1
//   },
//   root: {
//     position: "relative",
//     "&:before": {
//       pointerEvents: "none",
//       content: '""',
//       position: "absolute",
//       width: 14,
//       left: -16,
//       top: 14,
//       borderBottom: (props) =>
//         // only display if the TreeItem is not root node
//         props.nodeId !== "1" &&
//         // only display if the TreeItem has any child nodes
//         props.children?.length > 0
//           ? `1px dashed ${fade(theme.palette.text.primary, 0.4)}`
//           : "none"
//     }
//   },
//   iconContainer: {
//     "& .close": {
//       opacity: 0.3
//     }
//   },
//   group: {
//     marginLeft: 7,
//     paddingLeft: 18,
//     borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`
//   }
// }));

function StyledTreeItem(props) {
 // const classes = useTreeItemStyles(props);
  console.log(props,59,"tree");
  const { labelText, labelIcon: LabelIcon, ...other } = props;

  return (
    <TreeItem
      label={
        <div>
          <Typography variant="body2">
          <LabelIcon color="action" sx={{ fontSize: 20 }} />

            {labelText}
          </Typography>
        </div>
      }
      // classes={{
      //   root: classes.root,
      //   content: classes.content,
      //   group: classes.group,
      //   iconContainer: classes.iconContainer
      // }}
      {...other}
    />
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: 216,
//     flexGrow: 1,
//     maxWidth: 230
//   }
// }));

export default function ControlledTreeView() {
 // const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);

  const handleChange = (event, nodes) => {
    setExpanded(nodes);
  };


  return (
    <TreeView
    defaultCollapseIcon={<ExpandMoreIcon />}
    defaultExpandIcon={<ChevronRightIcon />}
    expanded={expanded}
    onNodeToggle={handleChange}
  >
      <StyledTreeItem nodeId="1" labelText="RSMSSB" labelIcon={PeopleAltIcon}>
        <StyledTreeItem nodeId="2" labelText="Science" labelIcon={PeopleAltIcon } />
        <StyledTreeItem nodeId="3" labelText="Mathematics" labelIcon={PeopleAltIcon}>
          <StyledTreeItem nodeId="4" labelText="Polynomials" labelIcon={PeopleAltIcon} />
          <StyledTreeItem nodeId="7" labelText="Inequalities" labelIcon={PeopleAltIcon} />
        </StyledTreeItem>
        <StyledTreeItem nodeId="8" labelText="English" labelIcon={PeopleAltIcon} />
      </StyledTreeItem>
    </TreeView>
  );
}
