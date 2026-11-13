import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FiMail, FiPhone, FiSend, FiArrowUpRight } from "react-icons/fi";
import { contactConfig, meta, socialprofils } from "../../content_option";
import "./style.css";

const isEmailJsConfigured = ![contactConfig.YOUR_SERVICE_ID, contactConfig.YOUR_TEMPLATE_ID, contactConfig.YOUR_USER_ID].some(value => !value || value.endsWith("_id"));

export const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState({ loading: false, message: "", error: false });
  const change = (event) => setForm(previous => ({ ...previous, [event.target.name]: event.target.value }));
  const submit = async (event) => {
    event.preventDefault();
    if (!isEmailJsConfigured) {
      const subject = encodeURIComponent("Portfolio inquiry from " + form.name);
      const body = encodeURIComponent(form.message + "\n\nFrom: " + form.name + " (" + form.email + ")");
      window.location.href = `mailto:${contactConfig.YOUR_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }
    setState({ loading: true, message: "", error: false });
    try {
      await emailjs.send(contactConfig.YOUR_SERVICE_ID, contactConfig.YOUR_TEMPLATE_ID, { from_name: form.name, user_name: form.name, reply_to: form.email, message: form.message, to_name: contactConfig.YOUR_EMAIL }, contactConfig.YOUR_USER_ID);
      setForm({ name: "", email: "", message: "" });
      setState({ loading: false, message: "Thanks! Your message has been sent.", error: false });
    } catch (error) {
      setState({ loading: false, message: "Message could not be sent. Please email me directly.", error: true });
    }
  };
  return <HelmetProvider>
    <Helmet><title>Contact | {meta.title}</title><meta name="description" content="Get in touch with Samuel Esubalew for full-stack development and collaboration." /></Helmet>
    <main className="contact-page">
      <div className="contact-intro"><span className="section-kicker">GET IN TOUCH</span><h1>Let's create <span className="gradient-text">something great.</span></h1><p>Have a project, opportunity, or a question? I'd love to hear from you.</p></div>
      <div className="contact-layout">
        <div className="contact-details"><h2>Let's talk.</h2><p>Whether you have a specific project in mind or just want to say hello, my inbox is open.</p><a className="contact-detail" href={`mailto:${contactConfig.YOUR_EMAIL}`}><FiMail /><span><small>EMAIL ME</small>{contactConfig.YOUR_EMAIL}</span><FiArrowUpRight /></a><a className="contact-detail" href={`tel:${contactConfig.YOUR_FONE}`}><FiPhone /><span><small>CALL ME</small>{contactConfig.YOUR_FONE}</span><FiArrowUpRight /></a><a className="contact-detail" href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer"><span className="contact-linkedin">in</span><span><small>CONNECT</small>LinkedIn</span><FiArrowUpRight /></a></div>
        <div className="contact-form-card"><h2>Send a message</h2><p>Tell me a little about what you're working on.</p><form onSubmit={submit}><div className="contact-field-row"><label>Your name<input name="name" value={form.name} onChange={change} placeholder="Your name" required maxLength={100} /></label><label>Email address<input name="email" type="email" value={form.email} onChange={change} placeholder="you@example.com" required maxLength={150} /></label></div><label>Message<textarea name="message" rows={6} value={form.message} onChange={change} placeholder="Tell me about your idea..." required maxLength={5000}/></label><button className="contact-submit" type="submit" disabled={state.loading}>{state.loading ? "Sending..." : isEmailJsConfigured ? "Send message" : "Open email app"} <FiSend /></button><p className="contact-form-note">{isEmailJsConfigured ? "I'll get back to you as soon as I can." : "Your email application will open with the message ready to send."}</p>{state.message && <p role="status" className={state.error ? "contact-alert error" : "contact-alert"}>{state.message}</p>}</form></div>
      </div>
    </main>
  </HelmetProvider>;
};
