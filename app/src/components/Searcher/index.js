import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo({pokemons}) {
    return (
        <Stack spacing={2} sx={{ width: 400 }}>
            <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={pokemons.map((pokemon) => pokemon.name)}
                renderInput={(params) => <TextField {...params} label="Choice pokemon.." />}
            />
        </Stack>
    );
}