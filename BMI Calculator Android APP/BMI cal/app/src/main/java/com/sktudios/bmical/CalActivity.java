package com.sktudios.bmical;

import androidx.appcompat.app.AppCompatActivity;

import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.content.Intent;
import android.os.Bundle;
import android.telephony.SmsMessage;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;


public class CalActivity extends AppCompatActivity {
    private EditText weight;
    private EditText height;
    private Button ok;
    private float a;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cal);
        this.setRequestedOrientation ( ActivityInfo.SCREEN_ORIENTATION_PORTRAIT );
        weight= (EditText)findViewById(R.id.et2);
        height = (EditText)findViewById(R.id.et1);
        ok = (Button)findViewById(R.id.b);
        ok.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                calculatebmi();

            }
        });
    }
    private void calculatebmi() {
        String heightstr =height.getText().toString();
        String weightstr =weight.getText().toString();
        if(heightstr != null && !"".equals(heightstr) && weightstr != null && !"".equals(weightstr)){
            float h=Float.parseFloat(heightstr)/100;
            float w=Float.parseFloat(weightstr);
            float bmi =w/(h*h);
            displaybmi(bmi);

        }
    }
    private  void displaybmi(float bmi){
        String bmilab="";
        if(Float.compare(bmi,19f) <0){
            startActivity(new Intent(CalActivity.this,UnderActivity.class));
        }
        else if(Float.compare(bmi,19f) >=0 && Float.compare(bmi,24f) <=0) {
            startActivity(new Intent(CalActivity.this, HealthyActivity.class));
        }
        else if(Float.compare(bmi,25f) >0 && Float.compare(bmi,39f) <=0) {
            startActivity(new Intent(CalActivity.this, OverActivity.class));
        }
        else{
            startActivity(new Intent(CalActivity.this, ObeseActivity.class));
        }
    }
}
