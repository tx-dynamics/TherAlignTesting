import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../../components/Text";
import { wp } from "../../../Helpers/Responsiveness";
import colors from "../../../config/colors";

function PlanOfCareScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Description */}
        <View>
          <AppText
            style={{
              textTransform: "uppercase",
              textAlign: "center",
              paddingVertical: wp(2),
            }}
          >
            Becoming a patient
          </AppText>
          <AppText
            style={{
              textAlign: "center",
              fontSize: wp(4),
              lineHeight: 25,
            }}
          >
            Patients are accepted for care only when there is a good opportunity
            for help and/or recovery. I am dedicated to providing you with the
            highest quality mental health services. Each Patient’s results may
            vary although best results can be achieved with active engagement
            and practice of interventions provided between sessions and
            completing the recommended course of treatment.
          </AppText>
        </View>
        {/* Card of Patient */}
        <View style={{ marginVertical: wp(2) }}>
          <View
            style={{
              flexDirection: "row",
              padding: wp(2),
              borderRadius: 10,
              backgroundColor: colors.gray,
              marginVertical: wp(2),
            }}
          >
            <AppText style={{ flex: 1 }}>Your Sitution/Condition</AppText>
            <MaterialCommunityIcons name="plus" size={25} />
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: wp(2),
              borderRadius: 10,
              backgroundColor: colors.gray,
              marginVertical: wp(2),
            }}
          >
            <AppText style={{ flex: 1 }}>Goal</AppText>
            <MaterialCommunityIcons name="plus" size={25} />
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: wp(2),
              borderRadius: 10,
              backgroundColor: colors.gray,
              marginVertical: wp(2),
            }}
          >
            <AppText style={{ flex: 1 }}>Measures</AppText>
            <MaterialCommunityIcons name="plus" size={25} />
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: wp(2),
              borderRadius: 10,
              backgroundColor: colors.gray,
              marginVertical: wp(2),
            }}
          >
            <AppText style={{ flex: 1 }}>Unique Circumstances</AppText>
            <MaterialCommunityIcons name="plus" size={25} />
          </View>
        </View>
        {/* Plan of care detail */}

        <View>
          <AppText
            style={{
              textTransform: "uppercase",
              textAlign: "center",
              paddingVertical: wp(2),
            }}
          >
            Plan of care
          </AppText>
          <View style={{ padding: wp(2) }}>
            <AppText> DATE: 16.02.2021</AppText>
            <AppText>
              {" "}
              Good progress is made in stages. You will need to work through
              some or all of the stages to give yourself the best chance to
              achieve the results you want. Certain stages may take several
              sessions. Below is my best estimate of the care you may need.
              Remember each person’s or couple’s need for care will vary. Your
              schedule may be altered based on your progress. Sessions are not
              limited to 1hr. Length of session(s) can be tailored to your
              needs.{" "}
            </AppText>
            <AppText>
              I cannot guarantee success, no one can, but this plan of care will
              encourage the best outcome.
            </AppText>
            <AppText>
              Session Frequency ___ Weekly ___ Bi-weekly M T W TH F Time
              _______________ *24 hour notice is required on all rescheduled
              appointments
            </AppText>

            <AppText>
              1 Crisis Diffusion Some situations demand immediate attention to
              prevent harm or severe worsening of the problem.
            </AppText>
            <AppText>
              2 History Your therapist needs to know the history behind your
              presenting problem.
            </AppText>
            <AppText>3 Finding Your Motivation </AppText>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: wp(4), marginTop: wp(4) },
});

export default PlanOfCareScreen;
