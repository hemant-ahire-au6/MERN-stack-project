import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { InputLabel, Select, MenuItem, FormControl} from "@material-ui/core"


function Dialog2() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add employee to project
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Member To Project</DialogTitle>
        <DialogContent>

          <FormControl style={{ width: "100%" }} >
            <InputLabel id="demo-simple-select-label">Select Project</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            // value={age}
            // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ width: "100%" }} >
            <InputLabel id="demo-simple-select-label">Select Employee</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            // value={age}
            // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add Project
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default Dialog2;
