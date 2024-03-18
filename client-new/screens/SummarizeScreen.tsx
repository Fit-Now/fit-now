import { Text, View } from "react-native";
import summaryAi from "../utils/summaryAi";
import { useEffect, useState } from "react";

const SummarizeScreen = ({ route }: { route: any }) => {
  const { month, category } = route.params;
  const [summary, setSummary] = useState("");

  const runSummary = async () => {
    const result = await summaryAi("basketball", month);
    console.log(result, "result di runSummary");
    setSummary(result);
  };

  useEffect(() => {
    runSummary();
  }, [month]);
  return (
    <View>
      <Text>
        INI SUMMARIZE SCREEN =={month}== BULAN PADA KATEGORI =={category}==
      </Text>
      <Text>Summarize :</Text>
      {summary && <Text>{summary}</Text>}
    </View>
  );
};

export default SummarizeScreen;
