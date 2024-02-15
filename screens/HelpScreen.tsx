import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

interface FormData {
  comment: string;
}

const HelpScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [submissionResult, setSubmissionResult] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    console.log(data.comment); 
    setSubmissionResult('Thank you for your feedback!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feel free to leave a comment:</Text>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Your Comment"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            keyboardType="default"
            multiline={true}
            numberOfLines={5}
            style={{ borderWidth: 1, padding: 10, marginVertical: 5 }}
          />
        )}
        name="comment"
        rules={{ required: 'Comment is required' }}
      />
      {errors.comment && <Text style={{ color: 'red' }}>{errors.comment.message}</Text>}

      <Button title="Submit Feedback" onPress={handleSubmit(onSubmit)} />

      {submissionResult && <Text style={{ padding: 10 }}>{submissionResult}</Text>}
    </View>
  );
};

export default HelpScreen;
