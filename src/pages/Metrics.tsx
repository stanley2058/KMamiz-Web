import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import {
  GetIndirectServiceChordData,
  GetServiceChordData,
} from "../classes/MockData";
import Chord from "../components/Chord";
import IChordNode from "../entities/IChordNode";
import IChordRadius from "../entities/IChordRadius";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    marginTop: "1em",
  },
}));

export default function Metrics() {
  const classes = useStyles();
  const [serviceChord, setServiceChord] = useState<{
    links: IChordRadius[];
    nodes: IChordNode[];
  }>({ links: [], nodes: [] });
  const [indirectServiceChord, setIndirectServiceChord] = useState<{
    links: IChordRadius[];
    nodes: IChordNode[];
  }>({ links: [], nodes: [] });

  useEffect(() => {
    // TODO: switch to api call later
    const service = GetServiceChordData();
    const indirectService = GetIndirectServiceChordData();

    setServiceChord(service);
    setIndirectServiceChord(indirectService);
  }, []);

  return (
    <Box className={classes.root}>
      <Grid container rowSpacing={1}>
        <Grid item xs={6}>
          <Chord title="Service Dependencies" chordData={serviceChord} />
        </Grid>
        <Grid item xs={6}>
          <Chord
            title="Indirect Service Dependencies"
            chordData={indirectServiceChord}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
