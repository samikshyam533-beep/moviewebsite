//post movie
export const postMovie = (req, res) => {
  res.status(201).json({ msg: "movie created successfully" });
};

//get movie
export const getMovie = (req, res) => {
  res.status(200).json({ msg: "movie recieved successfully" });
};

//update movie
export const updateMovie = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `movie ${id} updated successfully` });
};

//delete movie
export const deleteMovie = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `movie ${id} deleted successfully` });
};
