import { NextRequest, NextResponse } from 'next/server';
import { database, ConsultationRequest } from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['conversationId', 'userName', 'userEmail', 'consultationType', 'projectDescription'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create consultation request object
    const consultationRequest: ConsultationRequest = {
      conversation_id: body.conversationId,
      user_name: body.userName,
      user_email: body.userEmail,
      company_name: body.companyName,
      phone_number: body.phoneNumber,
      industry: body.industry,
      business_size: body.businessSize,
      consultation_type: body.consultationType,
      project_description: body.projectDescription,
      budget_range: body.budgetRange,
      timeline: body.timeline,
      preferred_contact_method: body.preferredContactMethod || 'email',
      preferred_time_slots: body.preferredTimeSlots,
      additional_notes: body.additionalNotes,
      status: 'pending',
      created_at: new Date()
    };

    // Save to database
    const consultationId = await database.saveConsultationRequest(consultationRequest);

    // Send notification email (optional - could be implemented later)
    // await sendConsultationNotificationEmail(consultationRequest);

    return NextResponse.json({
      success: true,
      consultationId,
      message: 'Consultation request submitted successfully'
    });

  } catch (error) {
    console.error('Error saving consultation request:', error);
    return NextResponse.json(
      { error: 'Failed to submit consultation request' },
      { status: 500 }
    );
  }
}

