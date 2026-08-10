import { useState, type ChangeEvent } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitStatus("idle");

    const sortedDates = [...selectedDates].sort((a, b) => {
      const parseDate = (value: string) => {
        const match = value.match(/^(\d{1,2})\/(\d{1,2})/);
        if (!match) {
          return Number.MAX_SAFE_INTEGER;
        }
        return Number(match[1]) * 100 + Number(match[2]);
      };

      return parseDate(a) - parseDate(b);
    });

    const payload = {
      name,
      participation,
      availableDates: sortedDates.join(", "),
      startTime,
      area,
      machine,
      otherRequests,
    };

    try {
      const response = await fetch(
        "https://default454d08fb0c314fc79e91efc4d8dce4.b8.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/28/workflows/e9e419d08ff24d2f9dfdfddec32addd9/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=_YYpw1tCvhMCt5sm51kT3WcGqfpFS8GR_NF5pHXyP9g",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          errorText || `送信に失敗しました（HTTP ${response.status}）`,
        );
      }

      setSubmitStatus("success");
      setSubmitMessage("送信しました。ご協力ありがとうございます。");
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? `${error.message}\n通信状況を確認して、もう一度お試しください。`
          : "送信中にエラーが発生しました。通信状況を確認して、もう一度お試しください。",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 4,
        px: 2,
        position: "relative",
        overflow: "hidden",
        backgroundImage: `linear-gradient(135deg, rgba(2, 6, 23, 0.96) 0%, rgba(76, 29, 149, 0.88) 48%, rgba(2, 6, 23, 0.96) 100%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='900' viewBox='0 0 1600 900'%3E%3Crect width='1600' height='900' fill='%23020717'/%3E%3Crect y='620' width='1600' height='280' fill='%23110f2f'/%3E%3Cpath d='M0 700 C260 600 500 620 780 690 C1030 750 1300 780 1600 690 L1600 900 L0 900 Z' fill='%230f0d2e'/%3E%3Ccircle cx='280' cy='300' r='220' fill='%23ff4fd8' fill-opacity='0.24'/%3E%3Ccircle cx='900' cy='240' r='260' fill='%2367e8f9' fill-opacity='0.18'/%3E%3Ccircle cx='1210' cy='330' r='180' fill='%23facc15' fill-opacity='0.16'/%3E%3Cpath d='M0 340 L260 220 L400 240 L680 140 L920 230 L1240 150 L1600 260 L1600 420 L1320 360 L1060 420 L820 320 L560 420 L300 360 L0 440 Z' fill='%233f2d88' fill-opacity='0.45'/%3E%3Cpath d='M0 720 L80 670 L170 690 L250 650 L340 670 L430 630 L520 660 L620 620 L720 650 L830 610 L930 640 L1030 600 L1120 640 L1220 600 L1320 630 L1420 590 L1520 620 L1600 590 L1600 900 L0 900 Z' fill='%23121c3b' fill-opacity='0.85'/%3E%3Cg fill='%23000000' fill-opacity='0.5'%3E%3Crect x='80' y='720' width='26' height='86'/%3E%3Crect x='128' y='700' width='22' height='106'/%3E%3Crect x='170' y='730' width='24' height='76'/%3E%3Crect x='220' y='710' width='22' height='96'/%3E%3Crect x='260' y='735' width='24' height='71'/%3E%3Crect x='1320' y='732' width='24' height='78'/%3E%3Crect x='1368' y='710' width='22' height='100'/%3E%3Crect x='1410' y='730' width='24' height='80'/%3E%3Crect x='1460' y='700' width='20' height='110'/%3E%3Crect x='1490' y='738' width='22' height='72'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
                  position: "absolute",
                  inset: "-18px auto auto 50%",
                  width: 260,
                  height: 90,
                  transform: "translateX(-50%)",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
                  filter: "blur(10px)",
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 1,
                  animation: "pulseGlow 1.6s ease-in-out infinite",
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: { xs: 0.75, sm: 1.25 },
                  mb: 1,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontSize: { xs: "1.6rem", sm: "2.4rem", md: "3.2rem" },
                    lineHeight: 1,
                    filter: "drop-shadow(0 0 8px #67e8f9)",
                    animation: "pulseGlow 1.6s ease-in-out infinite",
                  }}
                >
                  🎤
                </Box>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    color: "#f472b6",
                    textShadow:
                      "0 0 8px #ff4fd8, 0 0 20px #ff4fd8, 0 0 40px #ff4fd8",
                    animation: "pulseGlow 1.6s ease-in-out infinite",
                    fontSize: { xs: "1.2rem", sm: "2.2rem", md: "3.25rem" },
                    lineHeight: 1.1,
                    wordBreak: "break-word",
                  }}
                >
                  KARAOKE CLUB
                </Typography>
                <Box
                  component="span"
                  sx={{
                    fontSize: { xs: "1.6rem", sm: "2.4rem", md: "3.2rem" },
                    lineHeight: 1,
                    filter: "drop-shadow(0 0 8px #67e8f9)",
                    animation: "pulseGlow 1.6s ease-in-out infinite",
                  }}
                >
                  🎤
                </Box>
              </Box>

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
                  fontSize: { xs: "1rem", sm: "1.35rem", md: "1.75rem" },
                  lineHeight: 1.2,
                  px: { xs: 1, sm: 0 },
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
                  <MenuItem value="13:00">13:00頃</MenuItem>
                  <MenuItem value="14:00">14:00頃</MenuItem>
                  <MenuItem value="15:00">15:00頃</MenuItem>
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
              onClick={handleSubmit}
              disabled={isSubmitting}
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
                opacity: isSubmitting ? 0.7 : 1,
              }}
            >
              {isSubmitting ? "送信中..." : "🎤 LET'S SING !!　（送信）"}
            </Button>

            {submitStatus === "error" && (
              <Button
                type="button"
                fullWidth
                onClick={handleSubmit}
                disabled={isSubmitting}
                sx={{
                  py: 1.2,
                  borderRadius: 3,
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#fff1f2",
                  background:
                    "linear-gradient(90deg, #f43f5e 0%, #fb923c 100%)",
                  textTransform: "none",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                {isSubmitting ? "再送信中..." : "🔁 もう一度送信する"}
              </Button>
            )}

            {submitMessage && (
              <Box
                sx={{
                  borderRadius: 2,
                  border:
                    submitStatus === "error"
                      ? "1px solid #fb7185"
                      : "1px solid #86efac",
                  background:
                    submitStatus === "error"
                      ? "rgba(127, 29, 29, 0.8)"
                      : "rgba(20, 83, 45, 0.8)",
                  color: submitStatus === "error" ? "#fecdd3" : "#dcfce7",
                  textAlign: "center",
                  px: 2,
                  py: 1.5,
                  boxShadow:
                    submitStatus === "error"
                      ? "0 0 12px rgba(251, 113, 133, 0.25)"
                      : "0 0 12px rgba(134, 239, 172, 0.2)",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 700, mb: 0.5 }}
                >
                  {submitStatus === "error"
                    ? "⚠️ 送信に失敗しました"
                    : "✅ 送信完了"}
                </Typography>
                <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                  {submitMessage}
                </Typography>
              </Box>
            )}
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

export default Survey202608;
