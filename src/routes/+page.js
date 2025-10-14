// @ts-nocheck
import servicesAssessmentSVG from "$lib/servicesAssessmentSVG";
import servicesSensoryIntSVG from "$lib/servicesSensoryIntSVG";
import servicesSensoryDietSVG from "$lib/servicesSensoryDietSVG";
import servicesDIRSVG from "$lib/servicesDIRSVG";
import servicesVisualSchedulesSVG from "$lib/servicesVisualSchedulesSVG";
import servicesSocialStoriesSVG from "$lib/servicesSocialStoriesSVG";
import servicesPickyEatersSVG from "$lib/servicesPickyEatersSVG";
import servicesAlertSVG from "$lib/servicesAlertSVG";
import servicesHandwritingSVG from "$lib/servicesHandwritingSVG";
import servicesSkillsDevSVG from "$lib/servicesSkillsDevSVG";
import servicesSchoolVisitsSVG from "$lib/servicesSchoolVisitsSVG";
import servicesParentSupportSVG from "$lib/servicesParentSupportSVG";

import aboutOTSVG from "$lib/aboutOTSVG";
import aboutAutismSVG from "$lib/aboutAutismSVG";
import aboutAACSVG from "$lib/aboutAACSVG";
import aboutAttentionSVG from "$lib/aboutAttentionSVG";

import mediaBlogSVG from "$lib/mediaBlogSVG";
import mediaReviewsSVG from "$lib/mediaReviewsSVG";
import mediaPrivacySVG from "$lib/mediaPrivacySVG";

/** @type {import('./$types').PageLoad} */
export async function load() {
	const servicesCards = [
		{
			id: `services-ot-assessment`,
			title: "OT Assessment",
			iconHTML: servicesAssessmentSVG,
			bodyHTML: `An assessment will typically be the first step in your child's and family's Occupational Therapy journey`,
			link: `services-ot-assessment`,
			buttonHTML: `Read more <span class="sr-only">about OT Assessments</span>...`
		},
		{
			id: `services-sensory-int`,
			title: "Sensory Integration",
			iconHTML: servicesSensoryIntSVG,
			bodyHTML: `Sensory Integration is a post-graduate field of study that is specific to Occupational Therapy`,
			link: `services-sensory-int`,
			buttonHTML: `Read more <span class="sr-only">about Sensory Integration</span>...`
		},
		{
			id: `services-sensory-diet`,
			title: "Sensory Diet",
			iconHTML: servicesSensoryDietSVG,
			bodyHTML: `A personalised activity plan that regulates the sensory input that a child needs to stay focused and organised`,
			link: `services-sensory-diet`,
			buttonHTML: `Read more <span class="sr-only">about Sensory Diets</span>...`
		},
		{
			id: `services-dir-floortime`,
			title: "DIR & Floortime",
			iconHTML: servicesDIRSVG,
			bodyHTML: `Individual sessions to develop essential skills for communication, relationships and academic performance`,
			link: `services-dir-floortime`,
			buttonHTML: `Read more <span class="sr-only">about D I R and Floor time</span>...`
		},
		{
			id: `services-visual-schedules`,
			title: "Visual Schedules",
			iconHTML: servicesVisualSchedulesSVG,
			bodyHTML: `Visual schedules can help children understand and follow daily routines or sequential activities`,
			link: `services-visual-schedules`,
			buttonHTML: `Read more <span class="sr-only">about Visual Schedules</span>...`
		},
		{
			id: `services-social-stories`,
			title: "Social Stories",
			iconHTML: servicesSocialStoriesSVG,
			bodyHTML: `Social stories are personalised tools to help children understand social situations and events`,
			link: `services-social-stories`,
			buttonHTML: `Read more <span class="sr-only">about Social Stories</span>...`
		},
		{
			id: `services-picky-eaters`,
			title: "Picky Eaters",
			iconHTML: servicesPickyEatersSVG,
			bodyHTML: `Start a path to happier meal times by understanding picky eaters and how to expand their food choices`,
			link: `services-picky-eaters`,
			buttonHTML: `Read more <span class="sr-only">about Picky Eaters</span>...`
		},
		{
			id: `services-alert-program`,
			title: "Alert Program",
			iconHTML: servicesAlertSVG,
			bodyHTML: `Developed by Occupational Therapists to teach children self regulation and to support learning and positive behaviour`,
			link: `services-alert-program`,
			buttonHTML: `Read more <span class="sr-only">about our Alert Program</span>...`
		},
		{
			id: `services-handwriting`,
			title: "Handwriting",
			iconHTML: servicesHandwritingSVG,
			bodyHTML: `Foundational skills to develop legible, fluent and fast handwriting styles for success in handwriting`,
			link: `services-handwriting`,
			buttonHTML: `Read more <span class="sr-only">about Handwriting</span>...`
		},
		{
			id: `services-skills-dev`,
			title: "Skills Development",
			iconHTML: servicesSkillsDevSVG,
			bodyHTML: `Teaching children functional skills to become more independent in everyday activities`,
			link: `services-skills-dev`,
			buttonHTML: `Read more <span class="sr-only">about Skills Development</span>...`
		},
		{
			id: `services-school-visits`,
			title: "School Visits",
			iconHTML: servicesSchoolVisitsSVG,
			bodyHTML: `Observe children in their classroom setting. Establish communication with the child's teachers and educational support staff`,
			link: `services-school-visits`,
			buttonHTML: `Read more <span class="sr-only">about School Visits</span>...`
		},
		{
			id: `services-parent-support`,
			title: "Parent Support",
			iconHTML: servicesParentSupportSVG,
			bodyHTML: `Providing the family with equipment and strategies to best support their child achieve their full potential`,
			link: `services-parent-support`,
			buttonHTML: `Read more <span class="sr-only">about Parent Support</span>...`
		}
	];

	const aboutCards = [
		{
			title: "About Occupational Therapy",
			id: `about-ot`,
			iconHTML: aboutOTSVG,
			bodyHTML: `<div class="mb-2">
			<p>
				Occupational Therapy (OT) is an allied health profession, focused on
				improving people's ability to participate in their
				<span class="font-bold italic">Occupations.</span>
			</p>
			<p>
				<span class="font-bold italic">Occupations</span> are the everyday activities
				that provide meaning to our lives, ranging from self-care tasks such as dressing
				and eating, to attending work or school and the ability to engage in leisure
				and social activities.
			</p>
			<p>
				During Occupational Therapy, the client is encouraged to take part in the
				therapy process by participating in structured and unstructured activities.
			</p>
			<p>
				Occupational Therapists are trained in activity-analysis and can adapt and
				develop activities, to be specific for each client's individual needs.
			</p>
			<p>
				Occupational Therapists aim to minimise the environmental barriers that
				their clients experience, to increase their client's participation in
				meaningful tasks.
			</p></div>`,
			link: `about-ot`,
			buttonHTML: `Read more <span class="sr-only">about Occupational Therapy</span>...`
		},
		{
			title: "Autism Spectrum Disorder",
			id: `about-autism`,
			iconHTML: aboutAutismSVG,
			bodyHTML: `<p><span class="font-bold">From Autism South Africa:</span></p>
			<div class="italic">
				<p>
					Autism spectrum disorder (ASD) and autism are both general terms for a group
					of complex disorders of brain development.
				</p>
				<p>
					ASD is a developmental disability and people with ASD may communicate,
					interact, behave and learn in ways that are different from most other
					people. The learning, thinking, and problem-solving abilities of people with
					ASD can range from gifted to severely impaired.
				</p>
				<p>
					Some people with ASD need high support (a lot of help and intensive
					intervention) while others need low support (less help and less intensive
					intervention).
				</p>
				<p>
					Autism spectrum disorder (ASD) is characterised, in varying degrees, by
					difficulties in social interaction, verbal and non-verbal communication,
					repetitive behaviours and differences in sensory perception.
				</p></div>`,
			link: `about-autism`,
			buttonHTML: `Read more <span class="sr-only">about Autism Spectrum Disorder</span>...`
		},
		{
			title: "AAC",
			id: `about-aac`,
			iconHTML: aboutAACSVG,
			bodyHTML: `<p>
			Communication devices, systems, strategies and tools that replace or support
			natural speech are known as
			<span class="font-bold">Augmentative and Alternative Communication (AAC)
			</span>.</p>
			<p>
			The first “A” in AAC stands for
			<span class="font-bold">Augmentative</span>.
			</p>
			<div>
			When you augment something, you add to it. Augmentative communication adds something to the communication (eg. sign-language, pictures or a letter board) to make it more understandable.
			</div>
			<p>
			The second “A” in AAC stands for
			<span class="font-bold">Alternative</span>.
			</p>
			<div>
			If a person is not able to speak or if their speech is difficult to
			understand, they need a different (alternative) way to communicate.
			</div>`,
			link: `about-aac`,
			buttonHTML: `Read more <span class="sr-only">about Augmentative Alternative Communication</span>...`
		},
		{
			title: "Attention and Concentration",
			id: `about-attention`,
			iconHTML: aboutAttentionSVG,
			bodyHTML: `<div class="mb-2">
			<p>
				Children who struggle with attention and concentration are often described
				as:
			</p>
			<ul class="views-list-item">
				<li>
					Having trouble completing everyday tasks such as homework, schoolwork,
					chores or paperwork.
				</li>
				<li>Thinking about or doing other things than the task at hand.</li>
				<li>
					Over-aroused or difficulty dealing with normal sights and sounds in their
					environment.
				</li>
				<li>
					Untidy - Rooms, closets, desks, books and bags are frequently a disaster.
				</li>
				<li>
					They tend to be late and have trouble predicting how long things will
					take.
				</li>
				<li>
					Chores and school assignments put off to the last minute, often not
					completed on time or at all.
				</li>
				<li>Overly affectionate or talkative.</li>
				<li>
					Impulsive and often doing or saying before thinking. Easily angered or
					excited.
				</li>
			</ul></div>`,
			link: `about-attention`,
			buttonHTML: `Read more <span class="sr-only">about Attention and Concentration</span>...`
		}
	];

	const mediaCards = [
		{
			id: `media-blog`,
			title: "KidzCanDurban Blog",
			iconHTML: mediaBlogSVG,
			bodyHTML: `Read our blog`,
			link: `media-blog`,
			buttonHTML: `<span class="sr-only">Read our</span>Blog Posts...<span class="sr-only">Warning, this is an external link not suited to screen readers
			</span>`
		},
		{
			id: `media-reviews`,
			title: "Client Reviews",
			iconHTML: mediaReviewsSVG,
			bodyHTML: `<span class="font-bold">Rating average: 5 stars</span> 
		 			<br /><span>from 20 reviews</span>`,
			link: `media-reviews`,
			buttonHTML: `<span class="sr-only">Read our client</span>Reviews ...`
		},
		{
			id: `media-privacy`,
			title: "Privacy Policy",
			iconHTML: mediaPrivacySVG,
			bodyHTML: `<span class="font-bold">South African POPI Act</span>
					<br /><span>July 2021</span>`,
			link: `media-privacy`,
			buttonHTML: `<span class="sr-only">Read our privacy</span>Policy ...`
		}
	];

	return { servicesCards, aboutCards, mediaCards };
}
