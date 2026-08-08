import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function Survey202608() {
  const availableDates = [
    "9/5(土)",
    "9/6(日)",
    "9/12(土)",
    "9/13(日)",
    "9/14(月・祝)",
    "9/19(土)",
    "9/20(日)",
    "9/21(月・祝)",
    "9/22(火・祝)",
    "9/23(水・祝)",
    "9/26(土)",
    "9/27(日)",
  ];

  const [name, setName] = useState("");
  const [participation, setParticipation] = useState("参加したい");
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [startTime, setStartTime] = useState("13:30");
  const [area, setArea] = useState("");
  const [machine, setMachine] = useState("どちらでもOK");
  const [otherRequests, setOtherRequests] = useState("");

  const handleNameChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setName(event.target.value);
  };

  const handleParticipationChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setParticipation(event.target.value);
  };

  const handleStartTimeChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setStartTime(event.target.value);
  };

  const handleAreaChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setArea(event.target.value);
  };

  const handleMachineChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setMachine(event.target.value);
  };

  const handleOtherRequestsChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setOtherRequests(event.target.value);
  };

  const handleDateToggle = (date: string) => {
    setSelectedDates((prev) =>
      prev.includes(date)
        ? prev.filter((item) => item !== date)
        : [...prev, date],
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #020617 0%, #4c1d95 45%, #020617 100%)",
        py: 4,
        px: 2,
        position: "relative",
        overflow: "hidden",
        "@keyframes floatNote": {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0) rotate(0deg)",
            opacity: 0.7,
          },
          "50%": {
            transform: "translate3d(0, -18px, 0) rotate(8deg)",
            opacity: 1,
          },
        },
        "@keyframes pulseGlow": {
          "0%, 100%": {
            textShadow: "0 0 8px #ff4fd8, 0 0 20px #ff4fd8, 0 0 40px #ff4fd8",
          },
          "50%": {
            textShadow: "0 0 12px #67e8f9, 0 0 24px #67e8f9, 0 0 48px #67e8f9",
          },
        },
        "@keyframes spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            border: "2px solid #22d3ee",
            background: "rgba(2, 6, 23, 0.8)",
            boxShadow:
              "0 0 20px rgba(34, 211, 238, 0.35), 0 0 40px rgba(236, 72, 153, 0.2)",
            backdropFilter: "blur(10px)",
            color: "white",
          }}
        >
          <Stack spacing={3}>
            <Box textAlign="center" position="relative">
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1,
                  animation: "pulseGlow 1.6s ease-in-out infinite",
                }}
              ></Box>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  color: "#f472b6",
                  textShadow:
                    "0 0 8px #ff4fd8, 0 0 20px #ff4fd8, 0 0 40px #ff4fd8",
                  mb: 1,
                  animation: "pulseGlow 1.6s ease-in-out infinite",
                }}
              >
                KARAOKE CLUB
                <Box
                  component="span"
                  sx={{
                    fontSize: "3.2rem",
                    mr: 1,
                    filter: "drop-shadow(0 0 8px #67e8f9)",
                  }}
                >
                  🎤
                </Box>
              </Typography>

              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 700,
                  color: "#67e8f9",
                  textShadow:
                    "0 0 8px #67e8f9, 0 0 20px #67e8f9, 0 0 40px #67e8f9",
                  mb: 2,
                  animation: "pulseGlow 1.6s ease-in-out infinite",
                }}
              >
                9月開催アンケート
              </Typography>

              <Typography variant="body1" color="grey.300">
                9月のからおけ部開催に向けて日程調整を行います。
              </Typography>
            </Box>

            <Box
              sx={{
                border: "2px solid #f87171",
                background: "rgba(127, 29, 29, 0.8)",
                color: "#fecaca",
                p: 2,
                textAlign: "center",
                fontWeight: 700,
                borderRadius: 2,
                animation: "pulseGlow 1.4s ease-in-out infinite",
              }}
            >
              ⚠️ 回答締切：8/26
            </Box>

            <Stack spacing={2.5}>
              <Box
                sx={{
                  border: "1px solid #f472b6",
                  borderRadius: 3,
                  p: 3,
                  background: "rgba(15, 23, 42, 0.95)",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#f9a8d4", fontWeight: 700, mb: 1.5 }}
                >
                  1. お名前
                </Typography>
                <TextField
                  fullWidth
                  value={name}
                  onChange={handleNameChange}
                  placeholder=""
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(30, 41, 59, 0.9)",
                      color: "white",
                      borderRadius: 2,
                      "& fieldset": {
                        borderColor: "#f472b6",
                      },
                      "&:hover fieldset": {
                        borderColor: "#fb7185",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#67e8f9",
                      },
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  border: "1px solid #67e8f9",
                  borderRadius: 3,
                  p: 3,
                  background: "rgba(15, 23, 42, 0.95)",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#a5f3fc", fontWeight: 700, mb: 1.5 }}
                >
                  2. 参加希望
                </Typography>
                <TextField
                  select
                  fullWidth
                  value={participation}
                  onChange={handleParticipationChange}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(30, 41, 59, 0.9)",
                      color: "white",
                      borderRadius: 2,
                      "& fieldset": {
                        borderColor: "#67e8f9",
                      },
                      "&:hover fieldset": {
                        borderColor: "#22d3ee",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#f472b6",
                      },
                    },
                  }}
                >
                  <MenuItem value="参加したい">参加したい</MenuItem>
                  <MenuItem value="できれば参加したい">
                    できれば参加したい
                  </MenuItem>
                  <MenuItem value="今回は不参加">今回は不参加</MenuItem>
                </TextField>
              </Box>

              <Box
                sx={{
                  border: "1px solid #c084fc",
                  borderRadius: 3,
                  p: 3,
                  background: "rgba(15, 23, 42, 0.95)",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#e9d5ff", fontWeight: 700, mb: 1.5 }}
                >
                  3. 参加可能日（土日祝・複数選択可）
                </Typography>
                <Grid container spacing={1.5}>
                  {availableDates.map((date) => {
                    const checked = selectedDates.includes(date);
                    return (
                      <Grid item xs={12} sm={6} key={date}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            p: 1.25,
                            borderRadius: 2,
                            backgroundColor: "rgba(30, 41, 59, 0.9)",
                            border: checked
                              ? "1px solid #67e8f9"
                              : "1px solid rgba(255,255,255,0.15)",
                            boxShadow: checked
                              ? "0 0 10px rgba(103, 232, 249, 0.25)"
                              : "none",
                          }}
                        >
                          <Checkbox
                            checked={checked}
                            onChange={() => handleDateToggle(date)}
                            sx={{
                              color: "#f472b6",
                              "&.Mui-checked": {
                                color: "#67e8f9",
                              },
                            }}
                          />
                          <Typography variant="body2" sx={{ color: "white" }}>
                            {date}
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>

              <Box
                sx={{
                  border: "1px solid #f472b6",
                  borderRadius: 3,
                  p: 3,
                  background: "rgba(15, 23, 42, 0.95)",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#f9a8d4", fontWeight: 700, mb: 1.5 }}
                >
                  4. 希望開始時間
                </Typography>
                <TextField
                  select
                  fullWidth
                  value={startTime}
                  onChange={handleStartTimeChange}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(30, 41, 59, 0.9)",
                      color: "white",
                      borderRadius: 2,
                      "& fieldset": {
                        borderColor: "#f472b6",
                      },
                      "&:hover fieldset": {
                        borderColor: "#fb7185",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#67e8f9",
                      },
                    },
                  }}
                >
                  <MenuItem value="13:30">13:30</MenuItem>
                  <MenuItem value="14:00">14:00</MenuItem>
                  <MenuItem value="14:30">14:30</MenuItem>
                  <MenuItem value="15:00">15:00</MenuItem>
                  <MenuItem value="希望なし">希望なし</MenuItem>
                </TextField>
              </Box>

              <Box
                sx={{
                  border: "1px solid #67e8f9",
                  borderRadius: 3,
                  p: 3,
                  background: "rgba(15, 23, 42, 0.95)",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#a5f3fc", fontWeight: 700, mb: 1.5 }}
                >
                  5. 希望エリア
                </Typography>
                <TextField
                  fullWidth
                  value={area}
                  onChange={handleAreaChange}
                  placeholder="例：新宿・池袋・渋谷など"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(30, 41, 59, 0.9)",
                      color: "white",
                      borderRadius: 2,
                      "& fieldset": {
                        borderColor: "#67e8f9",
                      },
                      "&:hover fieldset": {
                        borderColor: "#22d3ee",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#f472b6",
                      },
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  border: "1px solid #c084fc",
                  borderRadius: 3,
                  p: 3,
                  background: "rgba(15, 23, 42, 0.95)",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#e9d5ff", fontWeight: 700, mb: 1.5 }}
                >
                  6. 希望機種
                </Typography>
                <TextField
                  select
                  fullWidth
                  value={machine}
                  onChange={handleMachineChange}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(30, 41, 59, 0.9)",
                      color: "white",
                      borderRadius: 2,
                      "& fieldset": {
                        borderColor: "#c084fc",
                      },
                      "&:hover fieldset": {
                        borderColor: "#d8b4fe",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#67e8f9",
                      },
                    },
                  }}
                >
                  <MenuItem value="LIVE DAM">LIVE DAM</MenuItem>
                  <MenuItem value="JOYSOUND">JOYSOUND</MenuItem>
                  <MenuItem value="どちらでもOK">どちらでもOK</MenuItem>
                </TextField>
              </Box>

              <Box
                sx={{
                  border: "1px solid #94a3b8",
                  borderRadius: 3,
                  p: 3,
                  background: "rgba(15, 23, 42, 0.95)",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#e2e8f0", fontWeight: 700, mb: 1.5 }}
                >
                  7. その他要望
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  value={otherRequests}
                  onChange={handleOtherRequestsChange}
                  placeholder="会場の希望・お店の雰囲気など"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(30, 41, 59, 0.9)",
                      color: "white",
                      borderRadius: 2,
                      "& fieldset": {
                        borderColor: "#94a3b8",
                      },
                      "&:hover fieldset": {
                        borderColor: "#cbd5e1",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#f472b6",
                      },
                    },
                  }}
                />
              </Box>
            </Stack>

            <Button
              type="button"
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: 3,
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "white",
                background:
                  "linear-gradient(90deg, #ec4899 0%, #8b5cf6 50%, #22d3ee 100%)",
                boxShadow: "0 0 18px rgba(236, 72, 153, 0.35)",
                textTransform: "none",
              }}
            >
              🎤 LET'S SING !!
            </Button>

            <Box textAlign="center">
              <Button
                component={Link}
                to="/"
                variant="outlined"
                sx={{ color: "#67e8f9", borderColor: "#67e8f9" }}
              >
                ホームへ戻る
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

export default Survey202608;
