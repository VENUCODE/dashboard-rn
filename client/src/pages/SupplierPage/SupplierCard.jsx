import { hostUri } from "../../fetch";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineCalendar,
} from "react-icons/ai";

import Time from "../../components/TimeAgo";
export default function SupplierCard({ supplier }) {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/supplier/${supplier._id}`);
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        data-aos="zoom-in"
        data-aos-delay="100"
        sx={{ boxShadow: 3, borderRadius: 2, overflow: "hidden" }}
      >
        <CardContent className="p-1 position-relative">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <Avatar
              variant="square"
              alt={supplier.name.toUpperCase()}
              className="rounded-1"
              src={hostUri + "/" + supplier.profileImage}
              sx={{ width: "100%", height: 100 }}
            />
          </div>
          <div className="bg-info-subtle py-1 mx-2 rounded-2">
            <Typography
              variant="h6"
              component="div"
              mt={2}
              textAlign="center"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontWeight: "bold",
              }}
              className="text-capitalize   mx-2 rounded-2"
            >
              {supplier.name}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              mt={2}
              textAlign="center"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="text-capitalize   mx-2 rounded-2"
            >
              <AiOutlineMail size={20} color="red" style={{ marginRight: 5 }} />
              {supplier.email}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              mt={2}
              textAlign="center"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="text-capitalize   mx-2 rounded-2"
            >
              <AiOutlinePhone
                color="green"
                size={20}
                style={{ marginRight: 5 }}
              />
              {supplier.mobile}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              mt={2}
              textAlign="center"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="text-capitalize   mx-2 rounded-2"
            >
              <AiOutlineCalendar
                size={20}
                color="blue"
                style={{ marginRight: 5 }}
              />
              <Time date={supplier.registered_Date} />
            </Typography>
          </div>
          <div className="w-100 px-2 py-2">
            <Button
              onClick={handleViewClick}
              fullWidth
              variant="contained"
              color="primary"
              className=""
            >
              View
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
