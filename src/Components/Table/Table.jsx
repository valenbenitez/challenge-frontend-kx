import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getComercios,
  orderComercio,
  orderCuit,
  filterActivo,
  nextPage,
  previousPage,
} from "../../redux/actions/index";
import InputSearch from "../InputSearch/InputSearch";
import Wave from "../Wave/Wave";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import "./table.css";
import { useState } from "react";

export default function Table() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const comercios = useSelector((state) => state.comercios);

  useEffect(() => {
    dispatch(getComercios());
  }, [dispatch]);

  const handleSelectActivo = (e) => {
    if (e.target.value === "clear") {
      dispatch(getComercios());
    } else {
      e.preventDefault();
      dispatch(filterActivo(e.target.value));
    }
  };

  const handleSelectComercio = (e) => {
    e.preventDefault();
    dispatch(orderComercio(e.target.value));
  };

  const handleSelectCuit = (e) => {
    e.preventDefault();
    dispatch(orderCuit(e.target.value));
  };

  const handleNext = () => {
    let ultPage = Math.ceil(comercios.length / 10);
    if (page <= ultPage) {
      setPage(page + 1);
      dispatch(nextPage(page));
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
      dispatch(previousPage(page));
    }
  };

  return (
    <>
      <div className="div1">
        <div className="div2">
          <InputSearch />
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>
                Comercio
                <br />
                <select onChange={(e) => handleSelectComercio(e)}>
                  <option value="asc">Order</option>
                  <option value="asc">ASC</option>
                  <option value="desc">DESC</option>
                </select>
              </th>
              <th>
                CUIT <br />
                <select onChange={(e) => handleSelectCuit(e)}>
                  <option value="desc">Order</option>
                  <option value="asc">ASC</option>
                  <option value="desc">DESC</option>
                </select>
              </th>
              <th>Concepto 1</th>
              <th>Concepto 2</th>
              <th>Concepto 3</th>
              <th>Concepto 4</th>
              <th>Concepto 5</th>
              <th>Concepto 6</th>
              <th>Balance actual</th>
              <th>
                Activo <br />
                <select onChange={(e) => handleSelectActivo(e)}>
                  <option value="clear">Filter</option>
                  <option value="true">Activo</option>
                  <option value="false">Inactivo</option>
                </select>
              </th>
              <th>Ultima venta</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(comercios) &&
              comercios.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.comercio}</td>
                  <td>{c.CUIT}</td>
                  <td>{c.Concepto1}</td>
                  <td>{c.Concepto2}</td>
                  <td>{c.Concepto3}</td>
                  <td>{c.Concepto4}</td>
                  <td>{c.Concepto5}</td>
                  <td>{c.Concepto6}</td>
                  <td>{c.balanceActual}</td>
                  <td>{c.activo}</td>
                  <td>{c.ultimaVenta}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton onClick={handlePrevious} aria-label="delete" size="small">
            <ArrowBackIosNewIcon fontSize="inherit" />
          </IconButton>
          <IconButton>
            <>{page}</>
          </IconButton>
          <IconButton onClick={handleNext} aria-label="delete" size="small">
            <ArrowForwardIosIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </div>
      <footer>
        <Wave />
      </footer>
    </>
  );
}
